import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RulesComponent } from "./rules/rules.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Triumvirate Countdown'
    },
    {
        path: 'rules',
        component: RulesComponent,
        title: 'Triumvirate Rules'
    }
]

export default routeConfig;