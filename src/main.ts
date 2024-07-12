import { bootstrapApplication } from '@angular/platform-browser';
import { PicklistFilterDemo } from './app/picklist-filter-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(PicklistFilterDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));