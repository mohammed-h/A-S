// app.routing.ts
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './_guard/index';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'login',
        component: AuthenticationComponent
    },
    {
        path: 'post',
        component: PostComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
