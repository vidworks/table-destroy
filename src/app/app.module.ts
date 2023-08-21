import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsPageComponent} from './items-page/items-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RouteReuseStrategy} from "@angular/router";
import {HuhuRouteReuseStrategy} from "./huhu-route-reuse-strategy";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import {RtlService} from "@fundamental-ngx/cdk";
import {CdkTableModule} from "@angular/cdk/table";
import {
  FdDatetimeModule,
  IllustratedMessageModule, LayoutPanelModule,
  ListModule, MultiInputModule,
  ObjectStatusModule,
  PopoverModule, SegmentedButtonModule, SelectModule, TableModule,
  ToolbarModule
} from "@fundamental-ngx/core";
import {
  FdpFormGroupModule, PlatformButtonModule,
  platformContentDensityModuleDeprecationsProvider, PlatformInputModule, PlatformListModule,
  PlatformMenuModule,
  PlatformSearchFieldModule, PlatformTableModule, PlatformMultiComboboxModule
} from "@fundamental-ngx/platform";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { MultiInputComponent } from './multi-input/multi-input.component';
import {HttpClientModule} from "@angular/common/http";
import { MultiComboExampleComponent } from './multi-combo-example/multi-combo-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    LandingPageComponent,
    MultiInputComponent,
    MultiComboExampleComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CdkTableModule,
    TableModule,
    PlatformTableModule,
    PlatformButtonModule,
    ObjectStatusModule,
    LayoutPanelModule,
    FdDatetimeModule,
    PlatformInputModule,
    PlatformSearchFieldModule,
    IllustratedMessageModule,
    MultiInputModule,
    FdpFormGroupModule,
    SelectModule,
    SegmentedButtonModule,
    ToolbarModule,
    PlatformMenuModule,
    PopoverModule,
    PlatformMultiComboboxModule,
    PlatformListModule,
    ListModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: false })
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: HuhuRouteReuseStrategy},
    RtlService,
    platformContentDensityModuleDeprecationsProvider('fdp-table')
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(themingService: ThemingService) {
themingService.init();
}
}
