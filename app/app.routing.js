"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
var access_1 = require("./components/access");
var home_component_1 = require("./components/home/home.component");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var messageView_component_1 = require("./components/home/messageView/messageView.component");
var seeInvites_component_1 = require("./components/home/seeInvites/seeInvites.component");
var list_component_1 = require("./components/list/list.component");
var play_component_1 = require("./components/home/play/play.component");
var yourGames_component_1 = require("./components/home/yourGames/yourGames.component");
var completedGames_component_1 = require("./components/home/completedGames/completedGames.component");
var main_component_1 = require("./components/home/main/main.component");
// ===========================================================================================
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: access_1.LoginComponent },
    { path: "register", component: access_1.RegisterComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "createGame", component: createGame_component_1.CreateGameComponent },
    { path: "createMessage", component: createMessage_component_1.CreateMessageComponent },
    { path: "gameView", component: gameView_component_1.GameViewComponent },
    { path: "messageView", component: messageView_component_1.MessageViewComponent },
    { path: "seeInvites", component: seeInvites_component_1.SeeInvitesComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "play", component: play_component_1.PlayComponent },
    { path: "main", component: main_component_1.MainComponent },
    { path: "yourGames", component: yourGames_component_1.YourGamesComponent },
    { path: "completedGames", component: completedGames_component_1.CompletedGamesComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw4RkFBOEY7QUFDOUYsa0JBQWtCO0FBQ2xCLDhGQUE4RjtBQUM5Riw4Q0FBdUU7QUFDdkUsbUVBQXFFO0FBQ3JFLDBGQUF3RjtBQUN4RixtR0FBaUc7QUFDakcsb0ZBQWtGO0FBQ2xGLDZGQUEyRjtBQUMzRiwwRkFBd0Y7QUFDeEYsbUVBQXFFO0FBQ3JFLHdFQUEwRTtBQUMxRSx1RkFBeUY7QUFDekYsc0dBQXdHO0FBQ3hHLHdFQUEwRTtBQUUxRSw4RkFBOEY7QUFFOUYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwwQkFBaUIsRUFBQztJQUNqRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFFO0NBRWpFLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUErQixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFHO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVFJBSUwgQVBQIFNUVUZGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY2Vzc1wiXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlR2FtZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVHYW1lL2NyZWF0ZUdhbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZU1lc3NhZ2UvY3JlYXRlTWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhbWVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2dhbWVWaWV3L2dhbWVWaWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWVzc2FnZVZpZXcvbWVzc2FnZVZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWVJbnZpdGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3NlZUludml0ZXMvc2VlSW52aXRlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGF5Q29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9wbGF5L3BsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBZb3VyR2FtZXNDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3lvdXJHYW1lcy95b3VyR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wbGV0ZWRHYW1lc0NvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY29tcGxldGVkR2FtZXMvY29tcGxldGVkR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9tYWluL21haW4uY29tcG9uZW50XCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZUdhbWVcIiwgY29tcG9uZW50OiBDcmVhdGVHYW1lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZU1lc3NhZ2VcIiwgY29tcG9uZW50OiBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImdhbWVWaWV3XCIsIGNvbXBvbmVudDogR2FtZVZpZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibWVzc2FnZVZpZXdcIiwgY29tcG9uZW50OiBNZXNzYWdlVmlld0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWVJbnZpdGVzXCIsIGNvbXBvbmVudDogU2VlSW52aXRlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJsaXN0XCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJwbGF5XCIsIGNvbXBvbmVudDogUGxheUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ5b3VyR2FtZXNcIiwgY29tcG9uZW50OiBZb3VyR2FtZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiY29tcGxldGVkR2FtZXNcIiwgY29tcG9uZW50OiBDb21wbGV0ZWRHYW1lc0NvbXBvbmVudCB9XG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiJdfQ==