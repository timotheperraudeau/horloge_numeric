let heureDizaine = document.querySelector('#heure-diz');
let heureUnite = document.querySelector('#heure-un');
let minuteDizaine = document.querySelector('#minute-diz');
let minuteUnite = document.querySelector('#minute-un');

function hour(){

function Un (elt){
    elt.querySelector('.segment-1').style.backgroundColor = "white";
};

function Deux(elt){
    elt.querySelector('.segment-2').style.backgroundColor = "white";
};

function Trois(elt){
    elt.querySelector('.segment-3').style.backgroundColor = "white";
};

function Quatre(elt){
    elt.querySelector('.segment-4').style.backgroundColor = "white";
};

function Cinq(elt){
    elt.querySelector('.segment-5').style.backgroundColor = "white";
};

function Six(elt){
    elt.querySelector('.segment-6').style.backgroundColor = "white";
};

function Sept(elt){
    elt.querySelector('.segment-7').style.backgroundColor = "white";
};

function Affichage(heure, minute){
    this.heure = heure;
    this.minute = minute;
}

Affichage.prototype.Heure = function(){
    this.tailleChiffre(this.heure,heureDizaine, heureUnite );
}

Affichage.prototype.Minute = function(){
    this.tailleChiffre(this.minute, minuteDizaine, minuteUnite);
    if(this.minute < 10){
        this.Dizaine(0, minuteDizaine);
    }
}

Affichage.prototype.tailleChiffre = function(chiffre, eltDizaine, eltUnite){
    if(chiffre < 10){
        this.Unite(chiffre, eltUnite);
    }else{
        let dizaine = Math.trunc(chiffre/10);
        this.Dizaine(dizaine, eltDizaine);
        if(chiffre < 20){
            let unite = chiffre-10;
            this.Unite(unite, eltUnite);
        }else if(chiffre < 30){
            let unite = chiffre-20;
            this.Unite(unite, eltUnite);
        }else if(chiffre < 40){
            let unite = chiffre-30;
            this.Unite(unite, eltUnite);
        }else if(chiffre < 50){
            let unite = chiffre-40;
            this.Unite(unite, eltUnite);
        }else{
            let unite = chiffre-50;
            this.Unite(unite, eltUnite);
        }
    }


}

Affichage.prototype.Chiffre = function(chiffre, elt){
    if(chiffre === 0){
        this.zero(elt);
    }else if(chiffre === 1){
        this.un(elt);
    }else if(chiffre === 2){
        this.deux(elt);
    }else if(chiffre === 3){
        this.trois(elt);
    }else if(chiffre === 4){
        this.quatre(elt);
    }else if(chiffre === 5){
        this.cinq(elt);
    }else if(chiffre === 6){
        this.six(elt);
    }else if(chiffre === 7){
        this.sept(elt);
    }else if(chiffre === 8){
        this.huit(elt);
    }else if(chiffre === 9){
        this.neuf(elt);
    }
}

Affichage.prototype.Dizaine = function(chiffre, elt){
    this.Chiffre(chiffre, elt);
}

Affichage.prototype.Unite = function(chiffre, elt){
    this.Chiffre(chiffre, elt);
}

Affichage.prototype.un = function(elt){
    Cinq(elt);
    Sept(elt);
};

Affichage.prototype.deux = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Cinq(elt);
    Six(elt);
};

Affichage.prototype.trois = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Cinq(elt);
    Sept(elt);
}

Affichage.prototype.quatre = function(elt){
    Deux(elt);
    Quatre(elt);
    Cinq(elt);
    Sept(elt);
}

Affichage.prototype.cinq = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Quatre(elt);
    Sept(elt);
}

Affichage.prototype.six = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Quatre(elt);
    Six(elt);
    Sept(elt);
}

Affichage.prototype.sept = function(elt){
    Un(elt);
    Cinq(elt);
    Sept(elt);
}

Affichage.prototype.huit = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Quatre(elt);
    Cinq(elt);
    Six(elt);
    Sept(elt);
}

Affichage.prototype.neuf = function(elt){
    Un(elt);
    Deux(elt);
    Trois(elt);
    Quatre(elt);
    Cinq(elt);
    Sept(elt);
}

Affichage.prototype.zero = function(elt){
    Un(elt);
    Trois(elt);
    Quatre(elt);
    Cinq(elt);
    Six(elt);
    Sept(elt);
}

    let date = new Date();
    let affHeure = date.getHours();
    let affMinute = date.getMinutes();
    let affichage = new Affichage(affHeure, affMinute);
    affichage.Heure();
    affichage.Minute();
}
hour();
setInterval(hour, 100)

