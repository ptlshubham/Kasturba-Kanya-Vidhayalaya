import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("QuickConnectComponent", () => {
  let component: QuickConnectComponent;
  let fixture: ComponentFixture<QuickConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickConnectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
