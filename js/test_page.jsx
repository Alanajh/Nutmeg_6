const test_1 = [
    {
        test_id: 001,
        question: 'Theodore Roosevelt' = [
            {
                option_1: 'Creator of The League of Nation',
                option_2: 'Civil Rights Movement',
                option_3: 'First president to live in the White House with electricity',
                option_4: 'The New Deal',
            }
        ],
        answer: 'The Square Deal',
        img: './media/theodore_roosevelt_1.jpg',
        points: '34',
        hint_1: 'A domestic program, which reflected his three major ' + 
            'goals: conservation of natural resources, control of corporations, and consumer protection.','',
        hint_2: 'Trust Buster: A term used to describe Theodore Roosevelt ' +
            'because of his aggressive use of U.S. antitrust laws to break up large business monopolies.',
        hint_3: 'Progressivism was a powerful political and social force by the turn of the century,' +
            'and many Americans considered Roosevelt as the leader of the Progressive movement. ' +
            'To most contemporaries, Progressivism meant the use of science, engineering, technology, ' +
            'and the new social sciences to promote modernization and identify solutions to political ' +
            'corruption and inefficiency. Roosevelt, trained as a biologist, identified himself and his ' +
            'programs with this scientific approach to targeting and eliminating social and political ills.',
    },
    {
        test_id: 002,
        question: 'George W. Bush',
        answer: '',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    }
];
function submit_button(){
    if(document.getElementById("testTitle").style.color != "red"){
        document.getElementById("testTitle").style.color = "red";  
    } else {
        document.getElementById("testTitle").style.color = "green";
    }
}

function getTestTitles() {

}

function getTestQuestions() {

}

function getTestAnswers() {

}  