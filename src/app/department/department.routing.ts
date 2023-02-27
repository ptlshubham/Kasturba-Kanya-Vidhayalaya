import { Routes } from '@angular/router';
import { KGComponent } from './kg/kg.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const DepartmentRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'kg',
        component: KGComponent
    },
    {
        path: 'staff',
        component: StaffDetailsComponent
    },
    {
        path:'student',
        component:StudentDetailsComponent
    }
    ]
}];
