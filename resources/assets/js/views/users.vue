<template>
    <div>
        <div class="content-header"><!-- Content Header (Page header) -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <!-- <h1 class="m-0 text-dark">Users</h1>

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
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div><!-- /.content-header -->

        <div class="content"><!-- Main content -->
            <div class="container-fluid">

                <div class="items">
                    <div class="card">
                        <div class="items__header card-header d-flex align-items-baseline justify-content-between">
                            <h1 class="m-0 text-dark">Users</h1>

                            <div class="input-group mb-3">
                                <!-- <input type="text" class="form-control" placeholder="Search by title" v-model="search"/> -->
                                <!-- <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="searchTitle" > Search </button>
                                </div> -->
                            </div>
                            <div class="card-tools">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add new <i class="fas fa-plus-square"></i></button>
                            </div>
                        </div><!-- /.card-header -->
                        <div class="items__body card-body">
                            <table id="users" class="table table-hover">
                                <thead class="thead">
                                    <tr class="row">
                                        <th class="col border-0">ID</th>
                                        <th class="col border-0">Name</th>
                                        <th class="col border-0">Email</th>
                                        <!-- <th class="col border-0">Password</th> -->
                                        <th class="col border-0">Created</th>
                                        <th class="col text-right d-none d-sm-block border-0">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="row" v-for="(user, index) in users" :key="index">
                                    <!-- <router-link v-for="(user, index) in users" :to="{ name: 'user-details', params: { id: user.id } }" tag="tr"> -->
                                        <td class="col" scope="row">{{user.id}}</td>
                                        <td class="col">{{user.name}}</td>
                                        <td class="col">{{user.email}}</td>
                                        <!-- <td class="col">{{user.password}}</td> -->
                                        <td class="col">{{user.created_at}}</td>
                                        <td class="col items__body__buttons d-flex justify-content-end align-items-start">
                                            <!-- <a :href="'/admin/users/' + user.id" class="m-1 d-block float-right" data-id="user.id"> -->
                                            <router-link :to="{ name: 'user-details', params: { id: user.id } }" class="m-1 d-block float-right">
                                                <button type="button" class="btn btn-sm btn-primary  d-flex align-items-center justify-content-between">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                            </router-link>
                                            <!-- </a> -->
                                            <a href="#" class="m-1 d-block float-right" data-id="user.id" @click="editModalWindow(user)">
                                                <button type="button" class="btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                            </a>
                                            <a href="#" class="m-1 d-block float-right" data-id="user.id" @click="deleteUser(user.id)">
                                                <button type="button" class="btn btn-sm btn-danger d-flex align-items-center justify-content-between">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </a>
                                        </td>
                                    <!-- </router-link> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- /.card-body -->
                        <div class="card-tools row">
                            <div class="col-12">
                                <div class="d-flex justify-content-start align-users-center">
                                    <button v-if="next" type="button" @click="navigate(next)" class="m-2 btn btn-primary">Next</button>
                                    <button v-if="prev" type="button" @click="navigate(prev)" class="m-2 btn btn-primary">Previous</button>
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

                                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New user</h5>
                                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update user</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form @submit.prevent="editMode ? updateUser() : saveUser()">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <input v-model="form.name" type="text" name="name" ref="name" placeholder="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.email" type="email" name="email" ref="email" placeholder="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.password" type="text" name="password" ref="password" placeholder="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                        <has-error :form="form" field="password"></has-error>
                                    </div>

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

    </div>
</template>

<script>
import UserDataService from "../services/service";

export default {
    name: "users-list",
    data() {
        return {
            users: [],
            authors: [],
            // currentUser: null,
            // currentIndex: -1,
            imagePreview: null,
            showPreview: false,
            search: "",
            editMode: false,
            next: null,
            prev: null,
            form: new Form({
                id: '',
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }),
        };
    },
    methods: {
        openModalWindow(){
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },
        editModalWindow(user){
            this.editMode = true
            this.form.reset();
            $('#addNew').modal('show');
            this.form.id = user.id;
            this.form.name = user.name;
            this.form.email = user.email;
            this.form.password = user.password;
            // this.form.image = this.$refs.image.files[0];//user.image;
        },
        saveUser() {
            this.$Progress.start();
            this.form.password_confirmation = this.form.password;

            console.log(this.form);
            this.$Progress.start();
            UserDataService.createUser(this.form)
            .then(response => {
                // this.form.id = response.data.id;
                // console.log(response.data);
                this.retrieveUsers();
                $('#addNew').modal('hide');
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateUser() {
            this.form.password_confirmation = this.form.password;
            console.log(this.form);
            this.$Progress.start();
            UserDataService.updateUser(this.form)
            .then(response => {
                // console.log(response.data);
                // this.message = 'The user was updated successfully!';
                this.retrieveUsers();
                $('#addNew').modal('hide');
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteUser(id) {
            this.$Progress.start();
            UserDataService.deleteUser(id)
            .then(response => {
                // console.log(response.data);
                // this.$router.push({ name: "users" });
                this.retrieveUsers();
                this.$Progress.finish();
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveUsers(address) {
            this.$Progress.start();
            UserDataService.getAllUsers(address)
            .then(response => {
                this.users = response.data.data;
                this.prev = response.data.links.prev;
                this.next = response.data.links.next;
                this.$Progress.finish();
                // console.log(response.data.links);
            })
            .catch(e => {
                console.log(e);
            });
        },
        navigate(address) {
            this.retrieveUsers(address);
        }
    },
    mounted() {
        this.retrieveUsers();
    }
};
</script>
