<template>
    <div>

        <router-link to='/'><i class="fas fa-home"></i></router-link>
        <router-link to='/search'><i class="fas fa-search"></i></router-link>
        <router-link to='/notification'><i class="fas fa-bell"></i></router-link>
        <router-link to='/message'><i class="fas fa-envelope"></i></router-link>

    </div>
</template>


<script>
export default {
    name: 'Navbar',
}
</script>

<style lang='scss' scoped>

    $background-color: #15202B;
    $subtitle-color: #6E767D;
    $primary-color: #3EAF7C;


    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 3rem;

        a{
            text-decoration: none;
            color: white;
            font-size: 1rem;

            &:hover{
                color: $subtitle-color;
            }
        }
    }
</style>