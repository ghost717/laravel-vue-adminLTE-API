<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">#{{ user.id}} - {{ user.name}} </h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <!-- <div class="card-tools">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                                    </div> -->
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Users</li>
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
                            <!-- <h1>{{ user.name }}</h1> -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name" v-model="user.name" placeholder="Title"/>
                                <has-error :form="form" field="name"></has-error>
                            </div>
                        </div>
                        <div class="item__body card-body">
                            <div class="row">
                                <div class="col-12 col-sm-8">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" v-model="user.email" placeholder="Email"/>
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="password" name="password" v-model="user.password" placeholder="Password"/>
                                        <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="item__footer card-header">
                            <div class="item__buttons d-flex justify-content-end align-items-start">
                                <a href="#" class="m-1 d-block float-right" data-id="user.id" @click="updateUser">
                                    <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                        Update <i class="fa fa-edit"></i>
                                    </button>
                                </a>
                                <a href="#" class="m-1 d-block float-right" data-id="user.id" @click="deleteUser">
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
import UserDataService from "../services/service";

export default {
    name: "user",
    data() {
        return {
            user: null,
            message: ''
        };
    },
    methods: {
        getUser(id) {
            this.$Progress.start();
            UserDataService.getUser(id)
            .then(response => {
                this.user = response.data.data;
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateUser() {
            this.$Progress.start();
            UserDataService.updateUser(this.user)
            .then(response => {
                // console.log(response.data);
                this.message = 'The user was updated successfully!';
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteUser() {
            this.$Progress.start();
            UserDataService.deleteUser(this.user.id)
            .then(response => {
                // console.log(response.data);
                this.$Progress.finish();
                this.$router.push({ name: "users" });
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = '';
        this.getUser(this.$route.params.id);
    }
};
</script>

