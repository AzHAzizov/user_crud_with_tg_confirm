import { createStore } from "vuex";
import { postModule } from "./postsModule";
import { userModule } from "./userModule";

export default createStore({
  modules: {
    user: userModule,
    post: postModule
  }
})