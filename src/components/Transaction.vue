<script setup>
const props = defineProps(["transaction"]);
</script>

<template>
    <RouterLink :to="{ name: 'transaction', params: { tId: transaction.id } }">
        <li>
            <span
                :class="{
                    't-img': transaction.transactionType === 'Transfer',
                    't-img2': transaction.transactionType === 'Recieve',
                }"
            >
                <i
                    class="fa fa-angle-double-right"
                    :class="{
                        'fa-angle-double-right':
                            transaction.transactionType === 'Transfer',
                        'fa-angle-double-left':
                            transaction.transactionType === 'Recieve',
                    }"
                ></i>
            </span>
        </li>
        <li>
            <h5>{{ transaction.title }}</h5>
            <h6>
                {{ transaction.transactionType }} &nbsp; ~
                <small> {{ transaction.date }} </small>
            </h6>
        </li>
        <li>
            <h4
                :class="{
                    credit: transaction.transactionType === 'Transfer',
                    debit: transaction.transactionType === 'Recieve',
                }"
            >
                {{ transaction.amount }}
            </h4>
        </li>
    </RouterLink>
</template>
