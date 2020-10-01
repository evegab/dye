SELECT * FROM blog_recientes;
SELECT * FROM blog_recientes order by prioridad DESC;
SELECT * FROM blog_odir order by id DESC;
ALTER TABLE blog_recientes add column prioridad int AFTER id;

-- tildes 
-- ¿= &iquest;
-- ñ = &ntilde;
-- vocal + tilde = &{vocal}acute;
UPDATE blog_recientes
SET script='<article class="col-block popular__post"><a href="blog.html" class="popular__thumb"><img src="images/guia-estudio-j.png" alt=""></a><h5><a href="blog.php">Gu&iacute;a de Estudio Jur&iacute;dico de T&iacute;tulos Inmobiliarios.</a></h5><section class="popular__meta"><span class="popular__author"><span></span> <a href="#0">Luis Felipe Casta&ntilde;eda L&oacute;pez</a></span> <br><span class="popular__date"><span></span> <time datetime="2017-12-16">Julio 01, 2019</time></span></section></article>'
where id=1;

UPDATE blog_odir
SET script=''
where id=1;

DELETE FROM blog_recientes where id=6;

ALTER TABLE blog_recientes AUTO_INCREMENT =5;

insert into blog_recientes (id, prioridad, script )
values (6, 6, '<article class="col-block popular__post"> <a href="blog.html" class="popular__thumb"><img src="images/imagen-publicaciones.jpg" alt=""></a> <h5><a href="blog.html">Principales caracter&Iacute;sticas de los reg&Iacute;menes civil y comercial: un an&Aacute;lisis sobre la unificaci&Oacute;n interna del derecho privado</a></h5> <section class="popular__meta"><span class="popular__author"><span></span> <a href="#0">Yeisson Coronel Avila</a></span><br><span class="popular__date"><span></span> <time datetime="2017-12-16">Septiembre 03, 2019</time> </span> </section></article>');


ALTER TABLE blog_recientes AUTO_INCREMENT = 5;



