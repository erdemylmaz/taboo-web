const containerMid = document.querySelector('.container-mid');
const lobbyMid = document.querySelector('.lobby-mid');
const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');
const gamePage = document.querySelector('.game-page');
const lobbiesContainer = document.querySelector('.lobbies-container');

const lobbiesArea = document.querySelector('.lobbies-area');
const turnBackLobbiesBtn = document.querySelector('.turn-back-lobbies-btn');

const headerTitle = document.querySelector('.lobby-name');

const inviteBtn = document.querySelector('.invite-btn');
const inviteModal = document.querySelector('.invite-alert-box');

const startGameBtn = document.querySelector('.start-btn');

const scoreAreas = document.querySelectorAll('.score');
const timeDiv = document.querySelector('.time')

const cardHeader = document.querySelector('.card-header');
const cardWordsArea = document.querySelector('.card-words');

const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const joinLobbyBtn = document.querySelector('.join-lobby-btn');

const joinTeamBtns = document.querySelectorAll('.join-team-btn');

let lobbyDIVS;
let lobbyIndex;

class Lobbies {
    lobbies = [
        {
            title: 'Erdem',
            admin: 'Erdem',
            password: '1',
            hasPassword: true,
            description: 'discord.gg/xxx',
            currentPlayer: 3,
            lobbyID: 0,
            players: ["Ergin", "Zeynep", "Erdem"],
            redTeam: ["Ergin", "Zeynep"],
            blueTeam: ["Erdem"],
        },

        {
            title: 'Ergin',
            admin: 'a',
            password: '123456',
            hasPassword: true,
            description: 'discord.gg/abcd',
            currentPlayer: 1,
            lobbyID: 0,
            players: ["Ergin"],
            redTeam: ["Ergin"],
            blueTeam: [],
        },
    ];

    initLobbiesContainer = () => {
        startContainer.style.display = "none";
        gameContainer.style.display = "none";
        lobbyMid.style.display = "none";
        containerMid.style.display = "none";

        inviteBtn.style.display = "none";
        headerTitle.textContent = "Online Taboo Game";

        this.lobbies.map((lobby) => {
            let div = document.createElement('div');
            div.className = "lobby-item";

            div.innerHTML = `
            <div class="item-left">
                <div class="item-name">${lobby.title} ${lobby.hasPassword ? "<div class='lock-icon'><i class='fa-solid fa-lock'></i></div>" : ""}</div>
                <div class="item-desc">${lobby.description}</div>
            </div>

            <div class="item-right">${lobby.currentPlayer}/10</div>
            `;

            lobbiesArea.appendChild(div);
        });

        lobbyDIVS = document.querySelectorAll('.lobby-item');
    }
}

const lobbies = new Lobbies();

lobbies.initLobbiesContainer();

lobbyDIVS.forEach((div, index) => {
    div.addEventListener('click', () => {
        lobbyIndex = index;

        lobby.title = lobbies.lobbies[index].title;
        lobby.password = lobbies.lobbies[index].password;
        lobby.admin = lobbies.lobbies[index].admin;
        lobby.allPlayers = lobbies.lobbies[index].players;

        headerTitle.textContent = `${lobby.title} LOBISI`;

        lobby.currentLobby = lobbies.lobbies[index];

        lobbiesContainer.style.display = "none";
        startContainer.style.display = "flex";
    });
});

class Lobby {
    title = null;
    password = null;

    currentLobby;

    admin = null;

    currentPlayingTeam = 0;
    currentPlayingUserIndex = 0;

    allPlayers = null;
}

const lobby = new Lobby();


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

class Game {
    username;
    isOnTeam = false;
    isGameOn = false;

    gameTime = 90;
    currentTime = 90;

    userTeam = null;
    enemyTeam = null;

    redTeam = {
        players: [],
        score: 0,
    };

    blueTeam = {
        players: ["Ergin", "Zeynep", "Emre", "Semih", "Hakan"],
        score: 0,
    };

    usedIndexes = [];

    invite = () => {
        inviteModal.style.transform = "translateY(0px)";
        inviteModal.textContent = 'Davet Linki Kopyalandı!';

        let URL = document.URL;

        navigator.clipboard.writeText(URL);

        setTimeout(() => {
            inviteModal.style.transform = "translateY(-128px)";
        }, 2000);
    }

    joinTeam = (e) => {
        if(!this.isGameOn) {
            let team = e.currentTarget.dataset.team;

            if(team == 0 && this.userTeam != 0 && this.redTeam.players.length < 5) {
                if(this.isOnTeam) {
                    this.blueTeam.players.map((player, index) => {
                        if(player == this.username) {
                            this.blueTeam.players.splice(index, 1);
                        }
                    });

                    lobby.currentLobby.blueTeam.map((player, index) => {
                        if(player == this.username) {
                            lobby.currentLobby.blueTeam.splice(index, 1);
                        }
                    });
                }

                this.redTeam.players.push(this.username);
                // lobby.currentLobby.redTeam.push(this.username);
                this.isOnTeam = true;
                this.userTeam = 0;
                this.enemyTeam = 1;

                joinTeamBtns[this.userTeam].classList.add('disabled-btn');
                joinTeamBtns[this.enemyTeam].classList.remove('disabled-btn');

                this.initBoxes();
            } else if(team == 1 && this.userTeam != 1 && this.blueTeam.players.length < 5) {
                if(this.isOnTeam) {
                    this.redTeam.players.map((player, index) => {
                        if(player == this.username) {
                            this.redTeam.players.splice(index, 1);
                        }
                    });

                    lobby.currentLobby.redTeam.map((player, index) => {
                        if(player == this.username) {
                            lobby.currentLobby.redTeam.splice(index, 1);
                        }
                    });
                }

                this.blueTeam.players.push(this.username);
                // lobby.currentLobby.blueTeam.push(this.username);
                this.isOnTeam = true;
                this.userTeam = 1;
                this.enemyTeam = 0;

                joinTeamBtns[this.enemyTeam].classList.remove('disabled-btn');
                joinTeamBtns[this.userTeam].classList.add('disabled-btn');

                this.initBoxes();
            }
        }


    }

    initBoxes = () => {
        // INIT RED BOX
        let redPlayerArea = document.querySelector('.red-players-area');
        redPlayerArea.innerHTML = '';
        let redTeamLength = this.redTeam.players.length;

        this.redTeam.players.map((player) => {
            let div = document.createElement('div');
            div.className = "player-div red-player-div";

            div.innerHTML = `<div class="player-name">${player} ${player == this.username ? "<span class='you-text'>(Siz)</span>" : ""} ${player == lobby.admin ? '<i class="fa-solid fa-crown"></i>' : ''}</div>`;

            redPlayerArea.appendChild(div);
        });

        let redCount = 5 - redTeamLength;

        for(let x = 0; x < redCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
            <div class="empty-title">BOŞ SLOT</div>
            <div class="empty-desc">bu takıma katılabilirsin</div>`;

            redPlayerArea.appendChild(div);
        }

        // INIT BLUE BOX
        let bluePlayerArea = document.querySelector('.blue-players-area');
        bluePlayerArea.innerHTML = '';
        let blueTeamLength = this.blueTeam.players.length;

        this.blueTeam.players.map((player) => {
            let div = document.createElement('div');
            div.className = "player-div blue-player-div";

            div.innerHTML = `<div class="player-name">${player} ${player == this.username ? "<span class='you-text'>(Siz)</span>" : ""} ${player == lobby.admin ? '<i class="fa-solid fa-crown"></i>' : ''}</div>`;

            bluePlayerArea.appendChild(div);
        });

        let blueCount = 5 - blueTeamLength;

        for(let x = 0; x < blueCount; x++) {
            let div = document.createElement('div');
            div.className = "player-div empty-player-div";

            div.innerHTML = `
            <div class="empty-title">BOŞ SLOT</div>
            <div class="empty-desc">bu takıma katılabilirsin</div>`;

            bluePlayerArea.appendChild(div);
        }

        // INIT JOIN BUTTONS

        if(this.redTeam.players.length == 5) {
            joinTeamBtns[0].classList.add('disabled-btn');
        }

        if(this.blueTeam.players.length == 5) {
                joinTeamBtns[1].classList.add('disabled-btn');
        }
    }

    nextWord = () => {
        let randomNumber;

        do{
            randomNumber = Math.floor(Math.random() * words.words.length);
        } while(this.usedIndexes.indexOf(randomNumber) != -1);

        let randomWord = words.words[randomNumber];

        cardHeader.textContent = randomWord.word;

        randomWord.tabuuWords.map((word) => {
            let div = document.createElement('div');
            div.className = "card-word";
            div.textContent = word;

            cardWordsArea.appendChild(div);
        });
    }

    addExtraZero = (x) => {
        return x < 10 ? "0" + x : x;
    }

    initLobby = () => {
        if(this.username == lobby.admin) {
            startGameBtn.style.display = "flex";
        } else {
            startGameBtn.style.display = "none";
        }

        headerTitle.textContent = `${lobby.title} LOBISI`;
        containerMid.style.display = "none";
        gameContainer.style.display = "flex";
        startContainer.style.display = "none";
        lobbyMid.style.display = "flex";


        this.redTeam.players = lobby.currentLobby.redTeam;
        this.blueTeam.players = lobby.currentLobby.blueTeam;

        this.initBoxes();
    }

    initGame = () => {
        scoreAreas[0].textContent = this.redTeam.score;
        scoreAreas[1].textContent = this.blueTeam.score;

        timeDiv.textContent = `${this.addExtraZero(Math.floor(this.gameTime / 60))}:${this.addExtraZero(Math.floor(this.gameTime % 60))}`;
        this.nextWord();
    }

    startGame = () => {
        this.initGame();
        this.isGameOn = true;

        joinTeamBtns.forEach((btn) => {
            btn.classList.add('disabled-btn');
        })

        containerMid.style.display = "flex";
        lobbyMid.style.display = "none";
    }

    initStart = () => {
        gameContainer.style.display = "none";
        lobbyMid.style.display = "none";
        startContainer.style.display = "flex";

        this.initBoxes();
    }
}

const game = new Game();

startGameBtn.addEventListener('click', game.startGame);

inviteBtn.addEventListener('click', game.invite);

joinLobbyBtn.addEventListener('click', () => {
    if(passwordInput.value != lobby.password) {
        inviteModal.style.transform = "translateY(0px)";
        inviteModal.textContent = `Şifre Yanlış!`

        setTimeout(() => {
            inviteModal.style.transform = "translateY(-128px)";
        }, 3000);
    } else if(usernameInput.value == "") {
        inviteModal.style.transform = "translateY(0px)";
        inviteModal.textContent = `Lütfen İsminizi Giriniz!`

        setTimeout(() => {
            inviteModal.style.transform = "translateY(-128px)";
        }, 3000);
    }

    let isUsernameAvailable = true;

    lobby.allPlayers.map((player) => {
        if(player.toLowerCase() == usernameInput.value.toLowerCase()) {
            isUsernameAvailable = false;
        }
    });

    if(!isUsernameAvailable) {
        inviteModal.style.transform = "translateY(0px)";
        inviteModal.textContent = `Lütfen Başka Bir İsim Giriniz!`

        setTimeout(() => {
            inviteModal.style.transform = "translateY(-128px)";
        }, 3000);
 
    }

    if(passwordInput.value == lobby.password && usernameInput.value != "" && isUsernameAvailable) {
        game.username = usernameInput.value;
        lobby.allPlayers.push(game.username);
        lobby.currentLobby.currentPlayer += 1;
        lobby.currentLobby.players.push(game.username);
        game.initLobby();
    }
});

joinTeamBtns.forEach((btn) => {
    btn.addEventListener('click', game.joinTeam);
});

turnBackLobbiesBtn.addEventListener('click', () => {
    lobbiesContainer.style.display = "flex";
    startContainer.style.display = "none";
})