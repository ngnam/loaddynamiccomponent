import {
  ComponentFactoryResolver,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class DynamicLoadComponentService {
  constructor(private cfr: ComponentFactoryResolver) {}
  async loadComponent<TComponent>(vcr: ViewContainerRef, component: Type<TComponent>) {
    vcr.clear();
    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component)
    );
  }

  clearComponent(vcr: ViewContainerRef) {
    vcr.clear();
  }
}
