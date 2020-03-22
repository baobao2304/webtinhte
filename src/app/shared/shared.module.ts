import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDiscussInfoComponent } from './components/content-discuss-info/content-discuss-info.component';
import { ContentHotPostsComponent } from './components/content-hot-posts/content-hot-posts.component';
import { ContentMainHeaderComponent } from './components/content-main-header/content-main-header.component';
import { ContentNewInformationComponent } from './components/content-new-information/content-new-information.component';
import { ContentQuestionComponent } from './components/content-question/content-question.component';
import { ContentSlideStoryComponent } from './components/content-slide-story/content-slide-story.component';
import { ContentTopUserContactComponent } from './components/content-top-user-contact/content-top-user-contact.component';
import { DownloadAppTinhteComponent } from './components/download-app-tinhte/download-app-tinhte.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { ContentInfoHotSystemComponent } from './components/content-info-hot-system/content-info-hot-system.component';
import { TaghotComponent } from './components/taghot/taghot.component';
import { SkilltinhteComponent } from './components/skilltinhte/skilltinhte.component';



@NgModule({
  declarations: [
    ContentDiscussInfoComponent,
    ContentHotPostsComponent,
    ContentMainHeaderComponent,
    ContentNewInformationComponent,
    ContentQuestionComponent,
    ContentSlideStoryComponent,
    ContentTopUserContactComponent,
    DownloadAppTinhteComponent,
    MenuContentComponent,
    ContentInfoHotSystemComponent,
    TaghotComponent,
    SkilltinhteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentDiscussInfoComponent,
    ContentHotPostsComponent,
    ContentMainHeaderComponent,
    ContentNewInformationComponent,
    ContentQuestionComponent,
    ContentSlideStoryComponent,
    ContentTopUserContactComponent,
    DownloadAppTinhteComponent,
    MenuContentComponent,
    ContentInfoHotSystemComponent,
    TaghotComponent,
    SkilltinhteComponent

  ]
})
export class SharedModule { }
