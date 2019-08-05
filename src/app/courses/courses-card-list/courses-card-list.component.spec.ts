import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { CoursesModule } from "../courses.module";
import { CoursesCardListComponent } from "./courses-card-list.component";



describe('CoursesCardListComponent', () => {
let component: CoursesCardListComponent;
let fixture: ComponentFixture <CoursesCardListComponent>;

beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [CoursesModule]
            //import component that includes all components 
            //leaving; out things like the http browser
        }) .compileComponents()
           .then(() => {
                fixture = TestBed.createComponent(CoursesCardListComponent)
                component = fixture.componentInstance;
            }) 
    }))


    it('should create the component', () => {
        expect(component).toBeTruthy
        console.log(component)

    });

    it('should display the course list', () => {

        
    });

    it('should display the first course', () => {

       
    });

});


