<div class="content-wrapper">
    <router-view
        :user-name='@json(auth()->user()->name)'
        :user-id='@json(auth()->user()->id)'>
    ></router-view>
    <vue-progress-bar></vue-progress-bar>
</div>
