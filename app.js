Vue.createApp({
    data() {
        return {
            title: '',
            category: 'Выберите категорию',
            description: '',
            hour: '',
            needDoList: [],
            completeList: []
        };
    },
    methods: {
        titleFun(event) {
            this.title = event.target.value;
        },
        categoryFun(event) {
            this.category = event.target.value;
        },
        descriptionFun(event) {
            this.description = event.target.value;
        },
        hourFun(event) {
            this.hour = event.target.value;
        },
        addTask() {
            if ((this.title === '') || (this.description === '') || (this.category === 'Выберите категорию') || (this.hour === '')) { return };
            this.needDoList.push({
                title: this.title,
                category: this.category,
                description: this.description,
                hour: this.hour,
                id: Math.random()
            });
            this.title = '';
            this.category = 'Выберите категорию';
            this.description = '';
            this.hour = '';
        },
        doCheck(index, type) {

            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            }
            else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const list = type === 'need' ? this.needDoList : this.completeList;
            list.splice(index, 1);
        }
    }
}
).mount('#app');