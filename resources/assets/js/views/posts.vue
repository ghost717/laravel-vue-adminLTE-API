<template>

    <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Posts</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Posts</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">

                <div id="posts">
                    <p class="border p-3" v-for="post in posts">
                        {{ post.title }}
                        <router-link :to="{ name: 'update', params: { postId : post.id } }">
                            <button type="button" class="p-1 mx-3 float-right btn btn-light">
                                Update
                            </button>
                        </router-link>
                        <button
                            type="button"
                            @click="deletePost(post.id)"
                            class="p-1 mx-3 float-right btn btn-danger"
                        >
                            Delete
                        </button>
                    </p>
                    <div>
                        <button
                            v-if="next"
                            type="button"
                            @click="navigate(next)"
                            class="m-3 btn btn-primary"
                        >
                        Next
                        </button>
                        <button
                            v-if="prev"
                            type="button"
                            @click="navigate(prev)"
                            class="m-3 btn btn-primary"
                        >
                        Previous
                        </button>
                    </div>
                </div>

            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content -->
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
