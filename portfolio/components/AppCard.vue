<template>
<div class="mb-4">  
    <div class=" h-36 w-[20em] card max-sm:w-[18em]">
        <div class="smallCard w-[20em] h-[8.8em] flex items-center max-sm:w-[18em]">
            <slot></slot>
        </div>
    </div>
</div>
</template>
<style scoped>
.topCard{
    background: #4F228D;
    border-radius: 15px;
}
.smallCard {

    background: linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%);
    box-shadow: 8px 7px 26px rgba(0, 0, 0, 0.12);
    border-radius: 15px;
}
.card{ 
background: #2c1250;
box-shadow: 4px 7px 26px rgba(0, 0, 0, 0.12);
border-radius: 15px;
z-index: 10;
}
</style>