import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSingleViewComponent } from './article-single-view.component';

describe('ArticleSingleViewComponent', () => {
  let component: ArticleSingleViewComponent;
  let fixture: ComponentFixture<ArticleSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
