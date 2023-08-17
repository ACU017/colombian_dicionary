--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists words;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `words`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `word` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `definition_es` LONGTEXT NOT NULL,
    `definition_en` LONGTEXT NOT NULL, -- this could be NULL if you want to auto translate it 
    `example_1` LONGTEXT NOT NULL,
    `example_2` LONGTEXT NULL
);

INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Abrirse', 'verb', 'Irse del lugar donde se está.', 'To leave the place you are.', 'Abrase del parche perro.', 'Me abro como la yuca.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Bacano', 'adjective', 'Algo bueno o positivo.', 'Something cool.', 'Que parche tan bacano!', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Camello', 'noun', 'Trabajo o palabra para describir algo dificil.', 'Used when something is difficult.', 'Que camello parce !', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Chiripa', 'noun', 'Cuando se tiene suerte con algo cuando todo el mundo lo daba por perdido.', 'When you have luck with something when everybody thought it was lost.', 'Logró subirse al metro de chiripa.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Parcera', 'noun', 'Amiga cercana.', 'Person who is a close friend.', 'Usted y yo si somos parceras.', 'Parcera eres genial !');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Parche', 'noun', 'Grupo de amistades.', 'Groupd of friends.', 'Yo siempre salgo con el parche reggeaton.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Ñera', 'noun', 'Persona sin estilo ni modales, o con poco criterio.', 'Person who has poor style choice and manners.', 'Parce Eliana es una ñera.', 'Que Ñerada de carro.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Buñuelo', 'noun', 'Alguien que está aprendiendo a conducir.', 'Person who just began driving.', 'Traigame un tinto para ese buñuelo.', 'Esa que está manejando ese pichirilo es una buñuela.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Carro', 'noun', 'Coche.', 'Car.', 'Que carro tan lindo.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Reggeaton', 'noun', 'El mejor género musical jamás inventado.', 'Best musical genre ever invented.', 'Y las mujeres piden reggeaton.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Motoso', 'noun', 'Siesta.', 'The word for a nap.', 'Me voy a pegar un motoso.', 'Que rico motosear.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Locha', 'noun', 'Palabra para designar la pereza o cuando algo no resulta cómodo.', 'Word for laziness or when something is not comfortable.', 'Que locha ir a trabajar un día festivo.', 'Que locha salir con josefa.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Cachaca', 'noun', 'Persona cuya familia lleva varias generaciones viviendo en Bogotá.', 'Person who\'s family has been in Bogotá for several generations.', 'La familia de Emilio es cachaca.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Maña', 'noun', 'Agilidad o vicio.', 'Agility or vice.', 'Que mañita de estar guardando los dulces en la maleta.', 'Ese carro toca manejarlo con maña.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Jeringuear', 'verb', 'Intentar hacer que algo funcione. Derivado de la palabra jeringa', 'Trying to make something work. Derived from the word syringe.', 'Está noche le jeringueo un poco a ver si lo arreglo.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Cachupe', 'noun', 'Acrónimo de caca, chucha y pecueca es decir que huele muy mal.', 'Acronym for caca, chucha and pecueca, meaning that it smells very bad.', 'Marica ayer llegó Etelvina oliendo a Cachupe.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Chucha', 'noun', 'Olor del sobaco.', 'Armpit odor.', 'Juanita llegó oliendo a chucha después del gimnasio.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Pecueca', 'noun', 'Olor de los pies.', 'Foot odor.', 'Alejandro se quitó los zapatos y tenía mucha pecueca.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Chicuca', 'noun', 'Se refiere al estado de algo cuando este está deteriorado o dañado.', 'Refers to the state of something when it is deteriorated or damaged.', 'Karen jugó con el cochecito y se volvió chicuca.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Culebrero', 'adjective', 'Encantador en tono peyorativo.', 'Charming in a pejorative tone.', 'Alberto es un culebrero.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Cuchuflí', 'noun', 'Equivalente de cosa, se usa para describir aquello para lo que no se encuentra la palabra correcta.', 'Equivalent of thing, used to describe that for which the correct word cannot be found.', 'Paseme el cuchuflí ese mija.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Chichigüa', 'noun', 'Cuando algo es percibido como poco, de mal gusto o de mala calidad.', 'When something is perceived as poor, tasteless or of poor quality.', 'No mijo ese aquí preparon pura chichigüa.', 'Solo dieron dos premios. Que chichigúa !');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('No se haya', 'idiom', 'Figura de estilo, metafora. Cuando alguien está enfadado y pareciera que su rabia es un mono que tiene sobre el hombro, es decir que es visible.', 'When someone is lost in their life plan or following a traumatic event.', 'Cuando María volvió de la selva no se hayaba.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Con el mico al hombro', 'idiom', 'Figura de estilo, metafora. Cuando alguien está enfadado y pareciera que su rabia es un mico que tiene el hombro es decir que es visible.', 'Figure of speech, metaphor. When someone is angry, and it seems that his anger is a monkey over his shoulder, that is to say that it is visible.', 'Oviedo salió del bar con el mico al hombro.', 'Mi abuela traía el mico al hombro después del velorio.');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('ponerse la 10', 'idiom', 'Hacer un favor. La diez es la camiseta de James un jugador de fútbol muy famoso.', 'Doing a favor. The ten is the number of James a very famous soccer player.', 'Quién se pone la diez y va a comprar gaseosas?', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('El correo de las brujas', 'idiom', 'Se refiere a la red de envios que no pasa por los canales oficiales.', 'Refers to the shipping network that does not go through official channels.', 'Cómo te trajeron esto ? El correo de las brujas.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Estar pilas', 'idiom', 'Estar pendiente de algo. Se dice cuando alguien tendría que prestar atención.', 'To be attentive to something. It is said when someone should pay attention.', 'Pilas que se le quema la carne.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Correrse', 'idiom', 'algo que genera muchas risas en España ya que allí significa otra cosa de carácter sexual. Correrse en Colombia simplemente significa apartarse, moverse.', 'Something that bringds a lot of laughter in Spain because there it means something else of a sexual nature. Correrse in Colombia simply means to move away, to move.', 'Corrase mijito para que quepamos todos en el sofá.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Dar papaya', 'idiom', 'Dar papaya es permitir que alguien se aproveche de ti.', 'Giving papaya refers to allowing someone to take advantage of you.', 'Mija si va a salir coja taxi, no de papaya.', '');
INSERT INTO tableName (word, category, definition_es, definition_en, example_1, example_2) VALUES ('Espichar', 'verb', 'Oprimir un botón o poner fuerza sobre algo.', 'To push or to press.', 'Marica espicha el 3 piso que me bajo ahí.', 'Correte que me estás espichando.');
