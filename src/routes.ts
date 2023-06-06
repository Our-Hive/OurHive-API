import { AuthController } from "./Auth/controllers/AuthController";
import { RegistroController } from "./RegistroDE/controllers/RegistroDEcontroller";
import { recordEOController } from "./RegistroEO/controllers/recordEOcontroller";
import { UserController } from "./User/controllers/UserController";

export const Routes = [{
    // USUARIO RUTAS
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "patch",
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "get",
    route: "/users/:id/registers",
    controller: UserController,
    action: "findRegistersByUserId"
},{
    method: "get",
    route: "/users/:id/emotions",
    controller: UserController,
    action: "findRecordEmotionByUserId"
},{ // DIARIO EMOCIONAL RUTAS
    method: "get",
    route: "/recordDE",
    controller: RegistroController,
    action: "all"
}, {
    method: "get",
    route: "/recordDE/:id",
    controller: RegistroController,
    action: "one"
}, {
    method: "post",
    route: "/recordDE",
    controller: RegistroController,
    action: "save"
}, {
    method: "delete",
    route: "/recordDE/:id",
    controller: RegistroController,
    action: "remove"
}, {
    method: "patch",
    route: "/recordDE/:id",
    controller: RegistroController,
    action: "update"
}, {
    method: "post",
    route: "/auth/login",
    controller: AuthController,
    action: "login"
}, {  // EMOCION OCASIONAL RUTAS
    method: "get",
    route: "/emotion",
    controller: recordEOController,
    action: "all"
}, {
    method: "get",
    route: "/emotion/:id",
    controller: recordEOController,
    action: "one"
}, {
    method: "post",
    route: "/emotion",
    controller: recordEOController,
    action: "save"
}, {
    method: "delete",
    route: "/emotion/:id",
    controller: recordEOController,
    action: "remove"
}, {
    method: "patch",
    route: "/emotion/:id",
    controller: recordEOController,
    action: "update"
}]