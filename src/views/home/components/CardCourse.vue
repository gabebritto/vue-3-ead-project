<template>
    <li>
        <span :class="['card', 'bg-' + bgName]">
            <span class="icon">
                <img :src="[image != '' ? image: require('@/assets/images/logo.png')]" :alt="title" />
            </span>
            <span class="title">{{ title }}</span>
            <span class="action">
                <a href="trainings.html" :class="['btn', bgName]">Acessar</a>
            </span>
        </span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </li>
</template>

<script>
export default {
    name: 'card-course',
    props: ['title', 'image', 'bgName']
};
</script>