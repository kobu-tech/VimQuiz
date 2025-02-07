// level_question_1.jsonから取得したすべての問題を入れる
let allProblem;

// asyncを指定することで、非同期処理となる
// functionを()でくくることで即時関数になる)
(async function getJsonFile() {
    axios.get('./level_question_1.json')
        // thenで成功した場合の処理
        // getしてきたjsonファイルデータをグローバル(どこからでも参照できる)変数に保持する
        .then(res => allProblem = res.data)

        // catchはエラーが起こったときに行う処理
        .catch(res => console.log(res))

        // 最終的に必ず行う処理
        .finally(res => console.log('finally'))
}());