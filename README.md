# Loaddynamiccomponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Fix error

`ERROR in src/app/app.component.ts(30,41): error TS1323: Dynamic import cannot be used when targeting ECMAScript 2015 modules.`

tại đây: https://github.com/Microsoft/TypeScript/issues/16675

- Thay đổi: Should I change `"module": "esnext"` trong `tsconfig.app.json`
