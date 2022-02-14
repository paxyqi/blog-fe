<template>
<div>
      <h4 class="text-center mt-20">
       <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Posts </button>
       </small>
    </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Post </h2>
          <form id="edit-post-form" @submit.prevent="editPost">
            <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="post.title" name="title" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group col-md-12">
                <label for="description"> Description </label>
                <input type="text" id="description" v-model="post.description" name="description" class="form-control" placeholder="Enter Description">
            </div>
            <div class="form-group col-md-12">
                <label for="body"> Write Content </label>
                <textarea id="body" cols="30" rows="5" v-model="post.body" class="form-control"></textarea>
            </div>
            <div class="form-group col-md-12">
                <label for="author"> Author </label>
                <input type="text" id="author" v-model="post.author" name="author" class="form-control">
            </div>

            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-success" type="submit"> Edit Post </button>
            </div>
          </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { server } from "../../utils/helper";
import axios from "axios";
import { useRouter } from "vue-router";
import { Post } from "../../model/post";

const router = useRouter();

let id = "";
let post:Post = {
    _id:"",
    title:"",
    description: "",
    body: "",
    author: "",
    date_posted: "",
};
const created = async() => {
    id = router.currentRoute.value.params.id[0];
    getPost();
  }

const editPost = async()=> {
    let postData = {
      title: post.title,
      description: post.description,
      body: post.body,
      author: post.author,
      date_posted: post.date_posted
    };
    axios.put(`${server.baseURL}/blog/edit?postID=${id}`, postData)
         .then(data => {
          router.push({ name: "home" });
        });
    }
const getPost = async() => {
    axios.get(`${server.baseURL}/blog/post/${id}`)
         .then(data => (post = data.data));
}
function navigate() {
    router.go(-1);
}
</script>

