import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operator/takeUntil';
import { DynamicHostDirective } from './dynamic-host.directive';
import { DynamicLoadComponentService } from './dynamic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  private destroySubject = new Subject();

  /**
   *
   */
  constructor(private dynamicService: DynamicLoadComponentService) {}

  ngOnInit() {
    this.loadComp();
  }

  async loadComp() {
    const viewContainerRef = this.dynamicHost.viewContainerRef;

    const { UserCardComponent } = await import(
      './components/user-card/user-card.component'
    );

    this.dynamicService
      .loadComponent(viewContainerRef, UserCardComponent)
      .then((m) => {
        m.instance.UserName = 'Nam nguyen';
        m.instance.OnSendMesssage
        .subscribe((data) => {
          // console.log(data);
          // alert(data.message +  ' Nam Nguyen');
        });
        m.instance.OnClose.subscribe(data => {
          this.dynamicService.clearComponent(viewContainerRef);
        });
        m.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
