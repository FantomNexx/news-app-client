import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCrudFormComponent } from './cmp-article-crud-form';

describe('CmpArticleCrudForm', () => {
  let component: ArticleCrudFormComponent;
  let fixture: ComponentFixture<ArticleCrudFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCrudFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
