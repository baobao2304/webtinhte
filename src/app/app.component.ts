import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  targets: NodeListOf<HTMLImageElement>;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  title = 'demowebtinhte';

  async getLazy1() {
    this.viewContainerRef.clear();
    // tslint:disable-next-line:no-shadowed-variable
    // tslint:disable-next-line:max-line-length
    const { ContentNewInformationComponent } = await import ('./shared/components/content-new-information/content-new-information.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ContentNewInformationComponent)
    );
  }
  async getLazy2() {
    this.viewContainerRef.clear();
    // tslint:disable-next-line:no-shadowed-variable
    // tslint:disable-next-line:max-line-length
    const { ContentTopUserContactComponent } = await import ('./shared/components/content-top-user-contact/content-top-user-contact.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ContentTopUserContactComponent)
    );
  }


}
