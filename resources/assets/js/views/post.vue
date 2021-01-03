<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <!-- <h1 class="m-0 text-dark">Posts</h1>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search by title" v-model="search"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" @click="searchTitle" > Search </button>
                            </div>
                        </div> -->
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
                            </div>
                        </div>
                        <div class="item__body card-body">
                            <!-- {{ post.body }} -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="body" name="body" v-model="post.body" placeholder="body"/>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <select name="user_id" v-model="post.user_id" ref="user_id" id="user_id" class="form-control">
                                            <option v-for="d in authors" :value="d.id">{{ d.name }}</option>
                                        </select>
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
            PostDataService.get(id)
            .then(response => {
                this.post = response.data.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        updatePublished(status) {
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
            })
            .catch(e => {
                console.log(e);
            });
        },
        updatePost() {
            PostDataService.update(this.post.id, this.post)
            .then(response => {
                // console.log(response.data);
                this.message = 'The post was updated successfully!';
            })
            .catch(e => {
                console.log(e);
            });
        },
        deletePost() {
            PostDataService.delete(this.post.id)
            .then(response => {
                // console.log(response.data);
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

