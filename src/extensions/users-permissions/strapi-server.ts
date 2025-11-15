import {errors} from "@strapi/utils";
const {ValidationError, ApplicationError, NotFoundError} = errors;
import { nanoid } from 'nanoid';
import {userControllers} from "../../api/user/controllers/user";
import {add} from "date-fns";

module.exports = (plugin) => {
  plugin.controllers.user.me = async (ctx) => {
    await userControllers.me(ctx);
  };
  return plugin;
};