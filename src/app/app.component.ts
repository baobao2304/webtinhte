import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  title = 'demowebtinhte';
  slides = [
    {img: '../assets/images/1.jpg'},
    {img: '../assets/images/2.jpg'},
    {img: '../assets/images/3.jpg'},
    {img: '../assets/images/4.jpg'},
    {img: '../assets/images/5.jpg'},
    {img: '../assets/images/6.jpg'},
    {img: '../assets/images/7.jpg'},
    {img: '../assets/images/8.jpg'},
    {img: '../assets/images/9.jpg'},
    {img: '../assets/images/10.jpg'},
    {img: '../assets/images/11.jpg'},
    {img: '../assets/images/12.jpg'}
  ];
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
