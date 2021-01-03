<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">#{{ post.id}} - {{ post.title}} </h1>
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

                <div class="item">
                    <form class="card">
                        <div class="item__header card-header">
                            <!-- <h1>{{ post.title }}</h1> -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="title" name="title" v-model="post.title" placeholder="Title"/>
                                <has-error :form="form" field="title"></has-error>
                            </div>
                        </div>
                        <div class="item__body card-body">
                            <div class="row">
                                <div class="col-12 col-sm-8">
                                    <div class="form-group">
                                        <!-- <input type="text" class="form-control" id="body" name="body" v-model="post.body" placeholder="body"/> -->
                                        <textarea name="body" id="body" class="form-control" v-model="post.body">{{post.body}}</textarea>
                                        <has-error :form="form" field="body"></has-error>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <div class="form-group">
                                        <div class="custom-file mb-3">
                                            <input type="file" ref="image" name="image" class="custom-file-input" id="image" required>
                                            <label class="custom-file-label" >Choose file...</label>
                                        </div>
                                    </div>
                                    <img v-bind:src="'../../storage/' + post.image" class="w-100 mt-5" />
                                    <has-error :form="form" field="image"></has-error>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <select name="user_id" v-model="post.user_id" ref="user_id" id="user_id" class="form-control">
                                            <option v-for="d in authors" :value="d.id">{{ d.name }}</option>
                                        </select>
                                        <has-error :form="form" field="user_id"></has-error>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <select name="published" v-model="post.user_id" ref="published" id="published" class="form-control">
                                            <option value="">Please select one</option>
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                        </select>
                                        <label><strong>Status:</strong></label>
                                        {{ post.published ? "Published" : "Draft" }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item__footer card-header">
                            <div class="item__buttons d-flex justify-content-end align-items-start">
                                <!-- <button class="badge badge-primary mr-2"
      v-if="post.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->
                                <a href="#" class="m-1 d-block float-right" data-id="post.id" @click="updatePost">
                                    <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                        Update <i class="fa fa-edit"></i>
                                    </button>
                                </a>
                                <a href="#" class="m-1 d-block float-right" data-id="post.id" @click="deletePost">
                                    <button type="button" class="btn btn-sm btn-danger d-flex align-items-center justify-content-between">
                                        Delete <i class="fas fa-trash"></i>
                                    </button>
                                </a>
                            </div>
                            <p>{{ message }}</p>
                        </div>
                    </form>
                </div><!-- item -->

            </div>
        </div><!-- content -->
    </div>
</template>

<script>
import PostDataService from "../services/service";

export default {
    name: "post",
    data() {
        return {
            post: null,
            authors: [],
            message: ''
        };
    },
    methods: {
        getAuthors(address) {
            axios.get(address ? address : "/api/users").then(response => {
                this.authors = response.data.data;
            });
        },
        getPost(id) {
            this.$Progress.start();
            PostDataService.getPost(id)
            .then(response => {
                this.post = response.data.data;
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updatePublished(status) {
            this.$Progress.start();
            var data = {
                id: this.post.id,
                title: this.post.title,
                body: this.post.body,
                published: status
            };

            PostDataService.update(this.post.id, data)
            .then(response => {
                this.post.published = status;
                console.log(response.data);
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updatePost() {
            // const data = new FormData();
            // data.append("title", this.form.title);
            // data.append("body", this.form.body);
            // data.append("user_id", this.form.user_id);
            // data.append("image", this.$refs.image.files[0]);
            // data.append("image", this.form.image);
            console.log(this.form);

            this.$Progress.start();
            PostDataService.update(this.post.id, this.post)
            .then(response => {
                // console.log(response.data);
                this.message = 'The post was updated successfully!';
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        deletePost() {
            this.$Progress.start();
            PostDataService.delete(this.post.id)
            .then(response => {
                // console.log(response.data);
                this.$Progress.finish();
                this.$router.push({ name: "posts" });
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = '';
        this.getPost(this.$route.params.id);
        this.getAuthors();
    }
};
</script>

