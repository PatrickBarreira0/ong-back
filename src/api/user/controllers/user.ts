/**
 
A set of functions called "actions" for user*/

export const userControllers = {

  async me(ctx){
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }
    ctx.body = await strapi.documents('plugin::users-permissions.user').findOne({
      documentId: ctx.state.user.documentId,
      populate: {
        role: true,
        },
    })
  },
  async updateRole(ctx){
    const { roleParams } = ctx.params;
    const roles = await strapi.documents('plugin::users-permissions.role').findMany({
      filters: {
        name: roleParams,
      },
    });
    if (roles.length === 0) {
      return ctx.badRequest('Role not found');
    }
    const user = await strapi.documents('plugin::users-permissions.user').update({
      documentId: ctx.state.user.documentId,
      data: {
        role: roles[0].documentId,
      },
    });
    return ctx.body = user;
  },
}

export default {
  ...
  userControllers,
};