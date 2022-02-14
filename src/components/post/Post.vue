<template>
    <div class="text-center">
        <div class="col-sm-12">
      <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All Posts </button></small></h4>
      <hr>
      <h2>{{ post.title }}</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by {{post.author}}, {{post.date_posted}}.</h5>
      <p> {{ post.body }} </p>

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
const getPost = async() => {
    axios.get(`${server.baseURL}/blog/post/${id}`)
         .then(data => (post = data.data));
}
function navigate() {
    router.go(-1);
}
</script>
