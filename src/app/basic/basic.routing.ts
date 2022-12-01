import { Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { StructureComponent } from './structure/structure.component';

export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'structure',
        component: StructureComponent
    },
    ]
}];
