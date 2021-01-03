<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Posts</h1>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search by title" v-model="title"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" @click="searchTitle" > Search </button>
                            </div>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <!-- <div class="card-tools">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                                    </div> -->
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Posts</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div><!-- /.content-header -->

        <div class="content"><!-- Main content -->
            <div class="container-fluid">

                <div>
                    <div class="card">
                        <div class="card-header">
                            <div class="card-tools">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                            </div>
                        </div><!-- /.card-header -->
                        <div class="card-body">
                            <table id="posts" class="table table-hover">
                                <thead class="thead">
                                    <tr class="row">
                                        <th class="col border-0">ID</th>
                                        <th class="col border-0">Title</th>
                                        <th class="col border-0">Image</th>
                                        <th class="col border-0">Author</th>
                                        <th class="col border-0">Created</th>
                                        <th class="col text-right d-none d-sm-block border-0">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr v-for="post in posts" :key="post.id" class="row"> -->
                                        <!-- :href="'/posts/' + currentPost.id" -->
                                    <tr class="row" :class="{ active: index == currentIndex }" v-for="(post, index) in posts" :key="index" @click="setActivePost(post, index)">
                                        <td class="col" scope="row">{{post.id}}</td>
                                        <td class="col">{{post.title}}</td>
                                        <td class="col">{{post.image}}</td>
                                        <td class="col">{{post.author.name}}</td>
                                        <td class="col">{{post.created_at}}</td>
                                        <td class="col buttons d-flex justify-content-end align-posts-center">
                                            <!--
                                             <router-link:to="{ name: 'posts/show', params: { postId : post.id } }" :class="m-1 d-block float-right">
                                                <button type="button" class="btn btn-sm btn-success  d-flex align-items-center justify-content-between">
                                                    Show <i class="fas fa-loop"></i>
                                                </button>
                                            </router-link>
                                            <a href="#" class="m-1 d-block float-right" data-id="post.id"  data-target="#addNew" @click="openModalWindow">

                                            </a> -->
                                            <a href="#" class="m-1 d-block float-right" data-id="post.id" @click="editModalWindow(post)">
                                                <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                                    Update <i class="fa fa-edit"></i>
                                                </button>
                                            </a>
                                            <a href="#" class="m-1 d-block float-right" data-id="post.id" @click="deletePost(post.id)">
                                                <button type="button" class="btn btn-sm btn-danger d-flex align-items-center justify-content-between">
                                                    Delete <i class="fas fa-trash"></i>
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- /.card-body -->
                        <div class="card-tools row">
                            <div class="col-12">
                                <div class="d-flex justify-content-start align-posts-center">
                                    <!-- <button v-if="next" type="button" @click="navigate(next)" class="m-2 btn btn-primary">Next</button>
                                    <button v-if="prev" type="button" @click="navigate(prev)" class="m-2 btn btn-primary">Previous</button> -->
                                </div>
                            </div>
                        </div>
                    </div><!-- /.card -->
                </div>

            </div>
        </div> <!-- content -->

                <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New post</h5>
                                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update post</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form @submit.prevent="editMode ? updatePost() : savePost()">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <select name="dev_id" v-model="form.dev_id" ref="dev_id" id="dev_id" class="form-control">
                                            <!-- <option v-for="d in devs" :value="d.id">{{ d.name }}</option> -->
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.title" type="text" name="title" ref="title" placeholder="title" class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.body" type="text" name="body" ref="body" placeholder="body" class="form-control" :class="{ 'is-invalid': form.errors.has('comment') }">
                                        <has-error :form="form" field="body"></has-error>
                                    </div>
                                    <!-- <div class="form-group">
                                        <select name="completed" v-model="form.completed" ref="completed" id="completed" class="form-control">
                                            <!-- <option value="">Please select one</option> - ->
                                            <option value="0">Nierozpoczety</option>
                                            <option value="1">Anulowany</option>
                                            <option value="2">W toku</option>
                                            <option value="3">Zakonczony</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="date" name="deadline" ref="deadline" v-model="form.deadline" class="form-control">
                                        <has-error :form="form" field="deadline"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <select name="priority" v-model="form.priority" ref="priority" id="priority" class="form-control">
                                            <option value="0">No priority</option>
                                            <option value="1">Low</option>
                                            <option value="2">High</option>
                                        </select>
                                    </div> -->
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button v-show="editMode" type="submit" class="btn btn-primary">Update</button>
                                    <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!-- .modal -->

  <!-- <div class="list row">

    <div class="col-md-6">
      <h4>Posts List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(post, index) in posts" :key="index" @click="setActivePost(post, index)" >
          {{ post.title }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Post</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentPost.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentPost.body }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentPost.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/admin/posts/' + currentPost.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Post...</p>
      </div>
    </div>
  </div> -->

    </div>
</template>

<script>
import PostDataService from "../services/service";

export default {
    name: "posts-list",
    data() {
        return {
            posts: [],
            currentPost: null,
            currentIndex: -1,
            title: "",
            editMode: false,
            next: null,
            prev: null,
            form: new Form({
                id: '',
                user_id: '',
                title: '',
                body: '',
                image: '',
            }),
        };
    },
    methods: {
        openModalWindow(){
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },
        editModalWindow(post){
            this.editMode = true
            this.form.reset();
            $('#addNew').modal('show');
            this.form.id = post.id;
            this.form.user_id = post.user_id;
            this.form.title = post.title;
            this.form.body = post.body;
            // this.form.image = post.image;
        },
        savePost() {
            var data = {
                title: this.form.title,
                body: this.form.body
            };
            DataService.create(data)
            .then(response => {
                this.form.id = response.data.id;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        updatePost() {
            PostDataService.update(this.form.id, this.form)
            .then(response => {
                console.log(response.data);
                // this.message = 'The post was updated successfully!';
            })
            .catch(e => {
                console.log(e);
            });
        },
        deletePost(id) {
            PostDataService.delete(id)
            .then(response => {
                console.log(response.data);
                // this.$router.push({ name: "posts" });
                this.retrievePosts();
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrievePosts() {
            PostDataService.getAll()
            .then(response => {
                this.posts = response.data.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        setActivePost(post, index) {
            this.currentPost = post;
            this.currentIndex = index;
        },

                                // refreshList() {
                                //     this.retrievePosts();
                                //     this.currentPost = null;
                                //     this.currentIndex = -1;
                                // },
        // removeAllPosts() {
        //     PostDataService.deleteAll()
        //     .then(response => {
        //         console.log(response.data);
        //         this.refreshList();
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // },
        searchTitle() {
            PostDataService.findByTitle(this.title)
            .then(response => {
                this.posts = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.retrievePosts();
    }
};
</script>
