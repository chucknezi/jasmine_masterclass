import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { CoursesModule } from "../courses.module";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { setupCourses } from "../common/setup-test-data";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";



describe('CoursesCardListComponent', () => {
let component: CoursesCardListComponent;
let fixture: ComponentFixture <CoursesCardListComponent>;
let el: DebugElement;

beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [CoursesModule]
            //import component that includes all components 
            //leaving; out things like the http browser
        }) .compileComponents()
           .then(() => {
                fixture = TestBed.createComponent(CoursesCardListComponent)
                component = fixture.componentInstance;
                el = fixture.debugElement;
            }) 
    }))


    it('should create the component', () => {
        expect(component).toBeTruthy()
    });

    it('should display the course list', () => {
        component.courses = setupCourses();

        fixture.detectChanges();
        // console.log(el.nativeElement.outerHTML)

        const cards = el.queryAll(By.css(".course-card"))
        expect(cards).toBeTruthy("Could not find cards")
        expect(cards.length).toBe(12, "unexpected")

    });

    it('should display the first course', () => {
        component.courses = setupCourses();
        fixture.detectChanges();

        const course = component[0];
        const card = el.query(By.css(".course-card:first-child")),
            title = card.query(By.css("mat-card-title")),
            image = card.query(By.css("img"))
        expect(card).toBeTruthy("Could not be found")
       
        expect(title.nativeElement.textContent).toBe(course.titles.description);
        expect(image.nativeElement.src).toBe(course.iconUrl)
    
    });

});


