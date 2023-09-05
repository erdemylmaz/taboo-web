// DATABASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-fVSZIXm0Rbxpw8DF3_Zz9zoXuipuCA",
  authDomain: "taboo-web.firebaseapp.com",
  projectId: "taboo-web",
  storageBucket: "taboo-web.appspot.com",
  messagingSenderId: "752739071752",
  appId: "1:752739071752:web:1cd9decaacbd6eca86debd",
  measurementId: "G-N6DLNHV8M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, ref, child, update, remove} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const db = getDatabase();

const containerMid = document.querySelector('.container-mid');
const lobbyMid = document.querySelector('.lobby-mid');
const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');
const lobbiesContainer = document.querySelector('.lobbies-container');

const lobbiesArea = document.querySelector('.lobbies-area');
const turnBackLobbiesBtn = document.querySelector('.turn-back-lobbies-btn');

const headerTitle = document.querySelector('.lobby-name');

const inviteBtn = document.querySelector('.invite-btn');
const inviteModal = document.querySelector('.invite-alert-box');

const lobbyText = document.querySelector('.lobby-text');
const joinTeamText = document.querySelector('.join-team-text');
const tourText = document.querySelector('.tour-text');

const lobbyBtns = document.querySelector('.lobby-btns');
const startTourBtn = document.querySelector('.start-tour-btn');
const startGameBtn = document.querySelector('.start-btn');
const nextPlayerBtn = document.querySelector('.next-player-btn');
const opponentBtn = document.querySelector('.opponent-btn');

const scoreAreas = document.querySelectorAll('.score');
const timeDiv = document.querySelector('.time')

const card = document.querySelector('.card-div');
const cardHeader = document.querySelector('.card-header');
const cardWordsArea = document.querySelector('.card-words');

const redBoxArea = document.querySelector('.red-players-area');
const blueBoxArea = document.querySelector('.blue-players-area');

const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const joinLobbyBtn = document.querySelector('.join-lobby-btn');

const joinTeamBtns = document.querySelectorAll('.join-team-btn');

const cardBtns = document.querySelectorAll('.btn');
const correctBtn = document.querySelector('.correct-btn');
const skipBtn = document.querySelector('.skip-btn');
const faulBtn = document.querySelector('.faul-btn');

class Words {
    // make words capitalized
    words = [
        {
            word: 'Tavla',
            tabuuWords: ["Zar", "Oyun", "Yenmek", "Mars", "Kapı"],
        },
        {
            word: 'Google',
            tabuuWords: ['Arama Motoru', 'Bilgisayar', 'İnternet', 'Site', 'Sayfa'],
        },
        {
            word: 'Bill Gates',
            tabuuWords: ['Zengin', 'Microsoft', 'Para', 'PC', 'Windows'],
        },
        {
            word: 'Okey',
            tabuuWords: ['Zar', 'Istaka', 'Taş', '4 Kişi', 'Oyun'],
        },
        {
            word: 'Para',
            tabuuWords: ['Kağıt', 'Dolar', 'Satın Almak', 'Ülke', 'Kazanmak'],
        },
        {
            word: 'Çopar',
            tabuuWords: ['İnce', 'Kaçmak', 'Ten Rengi', 'Parizyen', 'Ayak'],
        },
        {
            word: 'Kalem',
            tabuuWords: ['Kurşun', 'Tükenmez', 'Dolma', 'Kağıt', 'Çizmek'],
        },
        {
            word: 'Aşk',
            tabuuWords: ['Kalp', 'Erkek / Kadın', 'Tutku', 'Kırmızı', 'Seks'],
        },
        {
            word: 'Mouse',
            tabuuWords: ['Fare', 'Bilgisayar', 'Klavye', 'Tuş', 'Click'],
        },
        {
            word: 'Takvim',
            tabuuWords: ['Yıl', 'Ay', 'Hafta', 'Gün', 'Sayı'],
        },
        {
            word: 'Telefon',
            tabuuWords: ['Alo', 'Cep', 'Tuş', 'Ses', 'Numara'],
        },
        {
            word: 'Mücevher',
            tabuuWords: ['Kadın', 'Takı', 'Altın', 'Bilezik', 'Kolye'],
        },
        {
            word: 'Oje',
            tabuuWords: ['Tırnak', 'Renk', 'Sürmek', 'Aseton', 'Manikür'],
        },
        {
            word: 'Şimşek',
            tabuuWords: ['Gökyüzü', 'Yağmur', 'Işık', 'McQueen', 'Korku'],
        },
        {
            word: 'Steteskop',
            tabuuWords: ['Ses', 'Kalp', 'Doktor', 'Boyun', 'Dinlemek'],
        },
        {
            word: 'Hastalık',
            tabuuWords: ['Hasta', 'Corona', 'Doktor', 'Hemşire', 'İlaç'],
        },
        {
            word: 'Kafatası',
            tabuuWords: ['Beyin', 'Saç', 'Kemik', 'Arkeoloji', 'Kazı'],
        },
        {
            word: 'Gaga',
            tabuuWords: ['kuş', 'yemek', 'yavru', 'solucan', 'ağaçkakan'],
        },
        {
            word: 'ahize',
            tabuuWords: ['telefon', 'ses', 'alo', 'tuş', 'kabin'],
        },
        {
            word: 'çerçeve',
            tabuuWords: ['cam', 'resim', 'pimapen', 'ahşap', 'gözlük'],
        },
        {
            word: 'reçete',
            tabuuWords: ['doktor', 'ilaç', 'sağlık ocağı', 'hastane', 'eczane'],
        },
        {
            word: 'akrep',
            tabuuWords: ['burç', 'saat', 'yelkovan', 'zaman', 'sokmak'],
        },
        {
            word: 'Futbol',
            tabuuWords: ['Top', 'İddia', 'kale', 'stadyum', 'maç'],
        },
        {
            word: 'banka',
            tabuuWords: ['müşteri', 'para', 'hesap', 'çek', 'kredi kartı'],
        },
        {
            word: 'ev',
            tabuuWords: ['od', 'salon', 'kiralık', 'yaşamak', 'yuva'],
        },
        {
            word: 'ofis',
            tabuuWords: ['çalışmak', 'para', 'fotokopi', 'rezidans', 'beyaz yaka'],
        },
        {
            word: 'otel',
            tabuuWords: ['uyumak', 'tatil', 'hizmet', 'palas', 'masaj'],
        },
        {
            word: 'dost',
            tabuuWords: ['güven', 'arkadaş', 'dürüst', 'namuslu', 'yakın'],
        },
        {
            word: 'masa',
            tabuuWords: ['çalışma', 'çekmece', 'bilgisayar', 'yemek', 'kitap'],
        },
        {
            word: 'borsa',
            tabuuWords: ['iniş', 'çıkış', 'hisse', 'kripto', 'wall street'],
        },
        {
            word: 'kazak',
            tabuuWords: ['yün', 'iplik', 'sıcak', 'örme', 'yasak'],
        },
        {
            word: 'bisiklet',
            tabuuWords: ['tekerlek', 'fren', 'çocuk', 'pedal', 'sürmek'],
        },
    ];

    makeCapitalized = (x) => {
        let words = x.split(' ');
        let newX = "";

        words.map((word) => {
            let letters = word.split('');
            let newWord = "";

            letters.map((letter, index) => {
                if(index != 0) {
                    letter = letter.toLowerCase();
                } else {
                    letter = letter.toUpperCase();
                }

                newWord += letter;
            });

            if(words.length > 1) {
                newX += `${newWord} `;
            } else {
                newX = newWord;
            }
        });

        return newX;
    }
}

const words = new Words();

// MAKE WORDS CAPITALIZED 'Abcde'
words.words.map((word) => {
    word.word = words.makeCapitalized(word.word);

    word.tabuuWords.map((tabuuWord, index) => {
        word.tabuuWords[index] = words.makeCapitalized(tabuuWord);
    });
});

class Lobby {
    title = 'Erdem';
    password = "";
    admin = "admin";

    tour = 0;
    goal = 18;

    players = [];

    teams = [
        {
            players: [],
            score: 0,
        },
        {
            players: [],
            score: 0,
        },
    ];

    currentWordIndex = null;

    currentPlayingTeam = 0;
    currentPlayingIndex = 0;

    gameTime = 120;
    currentTime = 120;

    skipCount = 3;

    isGameOn = false;

    isTimerOn = false;

    usedIndexes = [];
}

const lobby = new Lobby();

class Game {
    username = null;
    userIndex = null;
    team = null;
    enemyTeam = 0;

    isUserPlaying = false;

    FPS = 1;

    timerInterval;

    addExtraZero = (x) => {
        return x < 10 ? "0" + x : x;
    }

    initGameContainer = () => {
        gameContainer.style.display = "flex";
        startContainer.style.display = "none";
    }

    joinLobby = () => {
        let usernameValue = usernameInput.value;
        let passwordValue = passwordInput.value;
        let canUseUsername = true;

        if(usernameValue == "") {
            inviteModal.textContent = `Lutfen isminizi giriniz`;
            inviteModal.style.transform = "translateY(0)";

            canUseUsername = false;

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        } else if (passwordValue != lobby.password) {
            inviteModal.textContent = `Sifre hatali!`;
            inviteModal.style.transform = "translateY(0)";

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        }


        if(lobby.players.indexOf(usernameValue) != -1) {
            canUseUsername = false;

            inviteModal.textContent = `Lutfen baska bir isim giriniz!`;
            inviteModal.style.transform = "translateY(0)";

            setTimeout(() => {
                inviteModal.style.transform = "translateY(-128px)";
            }, 3000);
        }

        if(canUseUsername && passwordValue == lobby.password) {
            this.username = usernameValue;
            lobby.players.push(usernameValue);

            this.initGameContainer();

            if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
                startGameBtn.style.display = "flex";
                lobbyText.style.display = "none";

            } else {
                startGameBtn.style.display = "none";
                lobbyText.style.display = "flex";
            }

            this.updateDatabase();
        }
        
    }

    updateBoxes = () => {
        redBoxArea.innerHTML = ``;
        blueBoxArea.innerHTML = ``;

        let redCount = 5 - lobby.teams[0].players.length;
        let blueCount = 5 - lobby.teams[1].players.length;

        lobby.teams.map((team, index) => {
            team.players.map((player, playerIndex) => {
                let div = document.createElement('div');
                div.className = "player-div";

                if(index == lobby.currentPlayingTeam && playerIndex == lobby.currentPlayingIndex) {
                    div.classList.add('active-player');
                } else {
                    div.classList.remove('active-player');
                }

                if(index == 0) {
                    div.classList.add('red-player-div');
                } else {
                    div.classList.add('blue-player-div');
                }

                div.innerHTML = `<div class='player-name'>${player} ${player == this.username ? "<span class = 'you-text'>(Siz)</span>" : ""} ${player == lobby.admin ? '<i class="fas fa-crown"></i>' : ""}</div>`;


                if(index == 0) {
                    redBoxArea.appendChild(div);
                } else {
                    blueBoxArea.appendChild(div);
                }
            });
        });

        for(let x = 0; x < redCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
                <div class="empty-title">BOŞ SLOT</div>
                <div class="empty-desc">bu takıma katılabilirsin</div>
            `;

            redBoxArea.appendChild(div);
        }

        for(let x = 0; x < blueCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
                <div class="empty-title">BOŞ SLOT</div>
                <div class="empty-desc">bu takıma katılabilirsin</div>
            `;

            blueBoxArea.appendChild(div);
        }

        if(lobby.isGameOn) {
            joinTeamBtns.forEach((btn) => {
                btn.classList.add("disabled-btn");
            })
        }
    }

    joinTeam = (e) => {
        if(!lobby.isGameOn) {
            let joiningTeam = e.currentTarget.dataset.team; 

            if(joiningTeam == 0) {
                this.enemyTeam = 1;
            } else {
                this.enemyTeam = 0;
            }

            if(this.team != joiningTeam && lobby.teams[joiningTeam].players.length < 5) {
                this.team = joiningTeam;
                lobby.teams[joiningTeam].players.push(this.username);
                this.userIndex = lobby.teams[joiningTeam].players.length - 1;

                lobby.teams[this.enemyTeam].players.map((player, index) => {
                    if(player == this.username) {
                        lobby.teams[this.enemyTeam].players.splice(index, 1);
                    }
                });

                joinTeamBtns[this.enemyTeam].classList.remove('disabled-btn');
                joinTeamBtns[joiningTeam].classList.add('disabled-btn');

                joinTeamText.style.display = "none";
            } else {
                joinLobbyBtn[joiningTeam].classList.add('disabled-btn');
            }

            if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
                lobbyText.style.display = "none";
                lobbyBtns.style.display = "flex";
            }

            this.updateDatabase();
        }
    }

    updateDatabase = () => {
        let configurations = {
            title: lobby.title,
            admin: lobby.admin,
            password: lobby.password,
            teams: lobby.teams,
            players: lobby.players,
            currentPlayingTeam: lobby.currentPlayingTeam,
            currentPlayingIndex: lobby.currentPlayingIndex,
            isGameOn: false,
            gameTime: lobby.gameTime,
            tour: lobby.tour,
            skipCount: lobby.skipCount,
        };

        if(lobby.usedIndexes) {
            configurations.usedIndexes = lobby.usedIndexes;

            if(this.team == lobby.currentPlayingTeam && this.userIndex == lobby.currentPlayingIndex) {
                configurations.currentWordIndex = lobby.currentWordIndex;
            }
        };

        if(this.team == lobby.currentPlayingTeam && this.userIndex == lobby.currentPlayingIndex) {
            configurations.currentTime = lobby.currentTime || 120;
            configurations.isGameOn = lobby.isGameOn;
        }

        set(ref(db, "Game/Lobby"), configurations).catch((err) => {
            console.log(err);
        });
    }

    updateCard = () => {
        if(lobby.isGameOn) {
            get(ref(db, "Game/Lobby")).then((snapshot) => {
                lobby.currentWordIndex = snapshot.val().currentWordIndex;
            })

            let word = words.words[lobby.currentWordIndex];
            card.style.display = "flex";

            cardHeader.textContent = word.word;
            cardWordsArea.innerHTML = ``;

            if(this.team == lobby.currentPlayingTeam && this.userIndex != lobby.currentPlayingIndex) {
                cardHeader.textContent = `****`;

                for(let x = 0; x < 5; x++) {
                    let div = document.createElement('div');
                    div.className = "card-word";
                    div.textContent = `****`;
                    cardWordsArea.appendChild(div);
                }

                cardBtns.forEach((btn) => {
                    btn.style.display = "none";
                });
            } else if(this.team != lobby.currentPlayingTeam) {
                cardBtns.forEach((btn) => {
                    btn.style.display = "none";
                });

                word.tabuuWords.map((word) => {
                    let div = document.createElement('div');
                    div.className = "card-word";

                    div.textContent = word;

                    cardWordsArea.appendChild(div);
                });
            } else if (this.team == lobby.currentPlayingTeam && this.userIndex == lobby.currentPlayingIndex) {
                cardBtns.forEach((btn) => {
                    btn.style.display = "flex";
                });

                word.tabuuWords.map((word) => {
                    let div = document.createElement('div');
                    div.className = "card-word";

                    div.textContent = word;

                    cardWordsArea.appendChild(div);
                });
            }
        } else {
            card.style.display = "none";

            cardBtns.forEach((btn) => {
                btn.style.display = "none";
            });
        }
    }

    updateFromDatabase = () => {
        get(ref(db, "Game/Lobby")).then((snapshot) => {
            let result = snapshot.val();
            lobby.currentPlayingIndex = result.currentPlayingIndex;
            lobby.currentPlayingTeam = result.currentPlayingTeam;
            lobby.players = result.players;
            lobby.teams = result.teams;
            lobby.currentTime = result.currentTime || 20;
            lobby.usedIndexes = result.usedIndexes;
            lobby.currentWordIndex = result.currentWordIndex;
            lobby.isGameOn = result.isGameOn;
            lobby.tour = result.tour;


            if(!lobby.players) {
                lobby.players = [];
            }

            if(!lobby.teams[0].players) {
                lobby.teams[0].players = [];
            }

            if(lobby.isGameOn) {
                containerMid.style.display = "flex";
                lobbyMid.style.display = "none";
            }

            if(!lobby.teams[1].players) {
                lobby.teams[1].players = [];
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    removeUser = () => {
        lobby.players.map((player, index) => {
            if(player == this.username) {
                lobby.players.splice(index, 1);
            }
        });

        lobby.teams.map((team) => {
            team.players.map((player, index) => {
                if(player == this.username) {
                    team.players.splice(index, 1);
                }
            });
        });

        lobby.isGameOn = false;

        lobby.usedIndexes = [];
        lobby.currentWordIndex = null;
        lobby.currentTime = 120;
        lobby.currentPlayingIndex = 0;
        lobby.currentPlayingTeam = 0;

        this.updateDatabase();
    }

    nextWord = () => {
        let randomNumber;

        if(!lobby.usedIndexes) {
            lobby.usedIndexes = [];
        }

        do{
            randomNumber = Math.floor(Math.random() * words.words.length);
        } while(lobby.usedIndexes.indexOf(randomNumber) != -1);

        lobby.currentWordIndex = randomNumber;
        lobby.usedIndexes.push(randomNumber);

        let word = words.words[randomNumber];

        cardHeader.textContent = word.word;

        cardWordsArea.innerHTML = ``;

        word.tabuuWords.map((word) => {
            let div = document.createElement('div');
            div.className = "card-word";

            div.textContent = word;

            cardWordsArea.appendChild(div);
        });
        this.updateDatabase();
    }

    startGame = () => {
        lobby.isGameOn = true;
        lobby.isTimerOn = true;
        lobbyBtns.style.display = "none";

        this.isUserPlaying = false;

        if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
            this.isUserPlaying = true;
        }

        if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
            this.timerInterval = setInterval(() => {
                if(lobby.currentTime > 0 && lobby.isTimerOn && this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
                    lobby.currentTime--;
                }

                if(lobby.currentTime == 0) {
                    this.endTour();
                }

                this.updateDatabase();
            }, 1000);

            this.nextWord();
        }

        this.updateDatabase();
    }

    updateTimer = () => {
        get(ref(db, "Game/Lobby")).then((snapshot) => {
            lobby.currentTime = snapshot.val().currentTime;
        });

        timeDiv.textContent = `${this.addExtraZero(Math.floor(lobby.currentTime / 60))}:${this.addExtraZero(Math.floor(lobby.currentTime % 60))}`;
    }

    updateLobby = () => {
        if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam && lobby.tour == 0) {
            lobbyBtns.style.display = "flex";
            startGameBtn.style.display = "flex";
            lobbyText.style.display = "none";
        } else {
            lobbyBtns.style.display = "none";
            lobbyText.style.display = "flex";
        }
    }

    endTour = () => {
        lobby.isTimerOn = false;
        lobby.currentTime = 120;
        lobby.skipCount = 3;
        lobby.isGameOn = false;

        lobby.tour += 1;

        if(lobby.currentPlayingTeam == 0) {
            lobby.currentPlayingTeam = 1;
        } else {
            lobby.currentPlayingIndex += 1;
            lobby.currentPlayingTeam = 0;
        }


        set(ref(db, "Game/Lobby/currentPlayingTeam"), lobby.currentPlayingTeam);
        set(ref(db, "Game/Lobby/currentPlayingIndex"), lobby.currentPlayingIndex);
        set(ref(db, "Game/Lobby/isGameOn"), lobby.isGameOn);

        card.style.display = "none";

        if(this.userIndex == lobby.currentPlayingIndex && this.team == lobby.currentPlayingTeam) {
            startTourBtn.style.display = "flex";
            tourText.style.display = "none"
        } else {
            startTourBtn.style.display = "none";
            tourText.style.display = "flex"
        }

        this.updateDatabase();
    }

    updateScoreBoard = () => {
        scoreAreas[0].textContent = lobby.teams[0].score;
        scoreAreas[1].textContent = lobby.teams[1].score;
    }

    invite = () => {
        let URL = location.href;
        navigator.clipboard.writeText(URL);
        inviteModal.style.transform = "translateY(0)";
        inviteModal.textContent = "Davet linki kopyalandı!";

        setTimeout(() => {
            inviteModal.style.transform = "translateY(-128px)";
        }, 2000);
    }

    correct = () => {
        lobby.teams[lobby.currentPlayingTeam].score += 1;
        this.updateScoreBoard();

        this.nextWord();
    }

    skip = () => {
        if(lobby.skipCount > 0) {

            lobby.skipCount -= 1;

            skipBtn.textContent = `PAS (${lobby.skipCount})`;

            this.nextWord();

            if(lobby.skipCount == 0) {
                skipBtn.classList.add('disabled-btn');
            }
        }
    }

    faul = () => {
        lobby.teams[lobby.currentPlayingTeam].score -= 1;
        this.updateScoreBoard();

        this.nextWord();
    }

    startTour = () => {

    }
}

const game = new Game();

joinLobbyBtn.addEventListener('click', game.joinLobby);

headerTitle.textContent = lobby.title + " Lobisi";

setInterval(game.updateCard, 1000 / game.FPS);
setInterval(game.updateBoxes, 1000 / game.FPS);
setInterval(game.updateTimer, 1000 / game.FPS);
setInterval(game.updateScoreBoard, 1000 / game.FPS);
setInterval(game.updateLobby, 1000 / game.FPS);
setInterval(game.updateFromDatabase, 1000 / game.FPS);

joinTeamBtns.forEach((btn) => {
    btn.addEventListener('click', game.joinTeam);
});

// CHECK IS USER CLOSED WINDOW
window.addEventListener('beforeunload', game.removeUser);

startGameBtn.addEventListener('click', game.startGame);
inviteBtn.addEventListener('click', game.invite);

nextPlayerBtn.addEventListener('click', () => {
    if(lobby.currentPlayingIndex < 4 && lobby.currentPlayingIndex < (lobby.teams[game.team].players.length - 1)) {
        lobby.currentPlayingIndex++;
    } else {
        lobby.currentPlayingIndex = 0;
    }

    game.updateDatabase();
});

opponentBtn.addEventListener('click', () => {
    lobby.currentPlayingTeam = game.enemyTeam;
    lobby.currentPlayingIndex = 0;

    game.updateDatabase();
});


// EMOJILI IFADE EKLEME KOY!!!

correctBtn.addEventListener('click', game.correct);
skipBtn.addEventListener('click', game.skip);
faulBtn.addEventListener('click', game.faul);