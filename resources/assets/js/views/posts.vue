<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Posts</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
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

                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">
                                <a href="/admin/posts/create"><button type="submit" class="btn btn-primary">Add Post</button></a>
                            </h3>

                            <div class="card-tools">
                                    <!-- <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div> -->
                            </div>
                        </div><!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table id="posts" class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="col-1">ID</th>
                                        <th class="col-3">Title</th>
                                        <th class="col-3">Body</th>
                                        <th class="col-1">Thumb</th>
                                        <th class="col-2 text-right" colspan="3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="post in posts">
                                        <td scope="row">{{post.id}}</td>
                                        <td>{{post.title}}</td>
                                        <td>{{post.body}}</td>
                                        <td>
                                             <img class="card-img-top" :src="'/storage/' + post.image" alt="Card image cap">
                                        </td>
                                        <td>
                                            <router-link :to="{ name: 'posts/show', params: { postId : post.id } }">
                                                <button type="button" class="p-1 mx-3 float-right btn btn-success">
                                                    Show
                                                </button>
                                            </router-link>
                                        </td>
                                        <td>
                                            <router-link :to="{ name: 'posts/update', params: { postId : post.id } }">
                                                <button type="button" class="p-1 mx-3 float-right btn btn-warning">
                                                    Update
                                                </button>
                                            </router-link>
                                        </td>
                                        <td>
                                            <button type="button" @click="deletePost(post.id)" class="p-1 mx-3 float-right btn btn-danger" >Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- /.card-body -->
                        <div>
                            <button v-if="next" type="button" @click="navigate(next)" class="m-3 btn btn-primary">Next</button>
                            <button v-if="prev" type="button" @click="navigate(prev)" class="m-3 btn btn-primary">Previous</button>
                        </div>
                    </div><!-- /.card -->
                </div>

            </div><!-- /.container-fluid -->
        </div><!-- /.content -->
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getPosts();
        },
        data() {
            return {
                posts: {},
                next: null,
                prev: null
            };
        },
        methods: {
            getPosts(address) {
                axios.get(address ? address : "/api/posts").then(response => {
                    this.posts = response.data.data;
                    this.prev = response.data.links.prev;
                    this.next = response.data.links.next;
                });
            },
            deletePost(id) {
                axios.delete("/api/posts/" + id).then(response => this.getPosts())
            },
            navigate(address) {
                this.getPosts(address)
            }
        }
    };
</script>
