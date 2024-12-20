---
title: "Karcher, B. J., Giger, F. M., & Combe, J. (1986). Some Practical Formulas To Predict Horizontal Well Behavior"
date: 2024-12-20
tags: ["аналитическая формула", "Karcher", "Giger", "ГС", "МГРП", "оценка дебита", "обзор статьи"]
language: 'ru-Ru'
math: true
---

<details>
<summary>Детали</summary>
<dl>
    <dt><b>авторы</b>: Karcher, B. J., Giger, F. M., & Combe, J. </dt>
    <dt><b>Название</b>: Some Practical Formulas To Predict Horizontal Well Behavior </dt>
    <dt><b>год</b>: 1986 </dt>
    <dt><b>DOI</b>: <a href ="https://doi.org/10.2118/15430-MS">Cсылка</a></dt>
</dl>
</details>


### Аннотация
Горизонтальное бурение успешно используется для увеличения продуктивности скважин в последние годы. 
Очень много существует аналитических формул для вычисления продукности ГС или наклонных скважин в сравнении с вертикальными. 
Одна из целей этой работы, чтобы вспомнить эти формулы (или как их правильно использовать) и какие есть допущения при их использовании.

Также представлен пример вычисления, показывающий влияние натуральных или полученных искусственно трещин. На ГС трещины более выгодны, потому что 
трещины образуются параллельно наибольшему сопротивлению, а это вертикальные трещины. Поэтому МГРП на ГС может увеличить дебит ГС в 10 раз и более.

И с точки зрения конусообразования ГС тоже выгоднее, чем ВС.

И еще что-то про паттерн расстановки. Тоже выгодная черта ГС. 



### Введение
Доказано, что бурение ГС (1-4) приводит к увеличению продуктивности. 
Сравнение ГС с ВС, наклонных скважиных со скважинами с МГРП впервые были получены с помощью потенциомертрического метода (7-9), 
а сейчас с помощью аналитических моделей для стационарной фильтрации (10-15) и реже с помощью transient pressure response (16-17).
Нельзя все эти методы использовать бездумно, ввиду их допущений. Возможность применения некоторых модели должны быть изучены путем сравнения 
с экспериментальными данными или численными расчетами.

Рассматриваются три случая:
1. однородный изотропный пласт
2. анизотропный
3. с трещинами (которые не пересекаются, или редкие или далеко друг от друга)

Проблема конусообразования. если происходит прорыв воды, то дебит нефть уже пренебрежительно мал и т.д. и т.о.

### Продуктивность ГС

Продуктивность ВС, область дренирования -- круг:
$$
\qquad(1)
$$

Продуктивность ВС с ГРП может быть получена при следующих допущениях:
- высота трещин = высоте пласта;
- трещины -- плоскости с центром на скважине;
- область дренирования больше, чем длина трещины;
- трещина бесконечной проницаемости.

Тогда поверхность эквипотенциала это эллипс, но может быть аппроксимирована окружностью (10) и вот формулы

$$
\qquad(2)
$$
или
$$
\qquad(3)
$$

#### Продуктивность с трещинами
Улучшение производительности, которое можно ожидать от вертикальных трещин, было изучено с использованием численной конечно-разностной модели, 
описывающей уравнения псевдостационарного потока для скважин и трещин, расположенных в замкнутой области.

Выбранное расположение представлено на рис.~1. Бесконечная горизонтальная скважина расположена в середине квадратной дренажной области. 
Предполагается, что трещины представляют собой вертикальные плоскости, пересекающие всю высоту резервуара, с длиной, меньшей ширины дренажной области L. Ширина дренажной области в 8 раз больше высоты H.

{{< figure src="/hw/articles_review/data/one_phase/data/images/karcher_1986_fig4.png" 
caption="Рис. 1. Бесконечный пласт, содержащий ГС с областью дренирования в виде параллелепипеда" >}}

Производительность трещины (с полным вертикальным проникновением) той же длины, что и горизонтальная скважина, всегда будет больше производительности скважины из-за линейного потока к трещине вместо радиального потока вокруг ствола скважины. 
Горизонтальная скважина, которая пересекает вертикальные трещины перпендикулярно своей оси, значительно выигрывает от этого эффекта. Результаты для бесконечной дренажной скважины иллюстрируют это. Рис.~2 показывает улучшение производительности, которое можно ожидать от трещин. Показанное увеличение представляет собой отношение производительности горизонтальной скважины, пересекающей трещины, к производительности той же горизонтальной скважины в однородной среде. Он построен в зависимости от безразмерной ширины трещины. Различные кривые предназначены для количества пересеченных трещин. Одна вертикальная скважина в той же зоне дренирования пересечет максимум одну трещину. При пересечении одной трещины увеличение производительности не превышает 1,5 для максимальной изученной длины трещины 0,5D. В этом случае скважина все еще участвует в потоке. Когда скважина пересекает 8 трещин (если ширина зоны дренирования составляет 400 м, то есть трещина каждые 50 м), увеличение достигает 12. В этой случае большая часть добычи поступает из трещин. 
Это исследование указывает на реальный интерес к производительности горизонтальных скважин и на то, как их следует использовать, когда геология месторождения хорошо известна, скважину можно ориентировать перпендикулярно основным трещинам, а затем достичь действительно высокого увеличения индекса производительности.

{{< figure src="/hw/articles_review/data/one_phase/data/images/karcher_1986_fig5.png" caption="Рис. 2. Зависимость продуктивности ГС с МГРП от ширины раскрытия при различном числе трещин" >}}


### Заключение
(гугл перевод)
ВЫВОДЫ
- Формулы индекса производительности оценивают увеличение производительности от 2 до 5 по сравнению с эквивалентной вертикальной скважиной в однородной среде.
- Наклонные скважины могут иметь более высокую производительность, чем горизонтальные, при равной длине перфорации, если вертикальная проницаемость очень низкая.
- Пересечение естественной сети вертикальных трещин может увеличить прирост производительности по сравнению с вертикальной скважиной до максимумов в 10 и более. Это, по-видимому, лучшая цель для производительности.
- Критические показатели в проблемах конусообразования могут быть умножены на коэффициент два, а извлечения более чем на три при близких к критическим показателях.
- Сверхкритическая добыча дает тот же прирост при прорыве, но они не увеличиваются после, за исключением случаев неблагоприятных коэффициентов подвижности.
- Эффективность охвата площади прямого линейного привода может приближаться к единице за счет использования горизонтальных скважин, и высокое увеличение извлечения нефти по сравнению с вертикальными скважинами достигается при дренажах, составляющих всего половину непрерывной линии.

### Номенклатура
- \(D\) -- расстояние между двумя линиями ГС, м

#### Греческие
- \(\rho\) -- плотность

#### Нижний индекс, верхний индекс
- \(c\) -- критический
- \(e\) -- внешний (область дренирования)
- \(f\) -- трещина, разлом
- \(h\) -- горизонтальный
- \(o\) -- нефть
- \(p\) -- перфорированный
- \(v\) -- вертикальный
- \(w\) -- скважина
- \(D\) -- безразмерный


### References
1. Dore, M.: "Horizontal Drilling Methods Proven in Three Test Wells," World Oil (May 1983).
2. Yager, D., "Esso Drills World's Longest Hori- zontal Well" The Roughneck, January 1985.
3. Jourdan, A.P., Reiss, L.H., Joly, E., "Hori- zontal Wells the Worlwide State-of-the-art, as of 1986". Presented at the SPE International Meeting on Petroleum Engineering, Beijing, China, 17-20 March, 1986. SPE 14067.
4. Reiss, L.H., Jourdan, A.P., Giger, F.M. and Arnessen, P.A. "Off onshore European hori- zontal wells," paper OTC 4791. Presented at the 1984 Offshore Technology Conference, Houston.
5. Striegler, J.: "ARCO Finishes Fourth Horizontal Drainhole," Oil and Gas Journal (May 24, 1982).
6. Hyland, C.R.: "Drain Hole Drilling
An Idea Whose Time is Now," paper SPE 12792 presented at the SPE 1984 California Regional Meeting, Long Beach, March 25-26, 1984.
7. Perrine, R.L.: "Well Productivity Increase from Drain Holes as Measured by Model Studies," Trans., AIME (1955) 204, 30-34.
8. Roemershauser, A.E. and Hawkins, M.F.: "The effect of Slant Hole, Drainhole, and Lateral Hole Drilling on Well Productivity," J. Pet. Tech. (Feb. 1955) 11-14.
9. Landrum, B.L. and Crawford, P.B.: "Effect of Drainhole Drilling on Production Capacity," Trans., AINE (1955) 204, 271-273.
10. Muskat, M.: The Flow of Homogeneous Fluids Through Porous Media, J.W. Edwards, Inc., Ann Arbor, Mich. (1946) 273.
11. Borisov, Ju. P.: "Exploitation des gisements de pétrole par des puits horizontaux et à dévia- tions multiples," Nedra, Moscow (1964), Trans- lation from Russian to French : Institut français du Pétrole, Rueil 28363.
12. Merkulov, V.P.: "Le débit des puits déviés et horizontaux," Neft. Khoz (1958) 6, 51-56 (in Russian).
13. Giger, F.: "Réduction du nombre de puits par l'utilisation de forages horizontaux", Revue de 1'Institut Français du Pétrole, vol 38, N° 3 (May-June 1983) (in French).
14. Giger, F.: "Horizontal wells productions techniques in heterogeneous reservoirs", paper SPE 13710 presented at the 1985 SPE Middle East Meeting, Bahrain, March 11-14, 1985.
15. Pyckhacev, G.B., "Underground Hydraulics", Moscow, 1961, 260-264 (in Russian).
16. Daviau, F., Bourdarot, G., Mouronval, G., Curutchet, P.: "Pressure Analysis for Horizon- tal Wells". SPE 14251 presented at SPE Annual Technical Conference and Exhibition, Las Vegas, Nevada, September 22-25, 1985..
17. Clonts, M.D, Ramey, H.J. Jr: "Pressure tran- sient analysis for wells with horizontal drainholes", paper SPE 15116 presented at the 1986 SPE California Regional Meeting, Oakland, April 2-4, 1986.
18. Earlougher, R.C. Jr: "Advances in well test analysis", SPE Monograph Series, Dallas, 1977, 5.
19. Muskat, M.: "The performance of Bottom water drive Reservoirs", Trans. AIME, 1947, 70,
81-111.
20. Chiericci, G.L., Giucci, G.M., Pizzi, G.: "A systematic study of gas and water coning by potentiometric models", J.P.T., Aug. 1964, 923929.
21. Sobocinsky, D.P., Cornelius, A.J.: "a correla- tion for predicting water coning time", J.P.T., May 1965, 594.
22. Hutchinson, T.S., Kemp, C.E.: "An extended analysis of bottom water drive reservoir performance", Trans. AIME, 207, 1956, 256-261.
23. Kidder, R.E.: "Flow of immiscible fluids in porous media : exact solution of a freee boundary problem," Journal of Applied Physics, Ang. (1956), 27.
24. Efros, D.A.: "Study of multiphase flows in porous media, Gastoptexizdat, Leningrad, 1963 (in Russian).
25. Giger, F.: "Evaluation théorique de l'effet d'arête d'eau sur la production par puits horizontaux," Revue de l'Institut Français du Pétrole, Vol. 38, N° 3, (May-June 1983) (in French).
26. Giger, F.: "Analytical 2-D models of water cresting before breakthrough for horizontal wells" paper SPE n° 15378, to be presented at 61st SPE annual Meeting, New Orleans, Oct. 5-8, 1986.
27. Chaperon, I.: "Theoretical study of water oil gas coning towards vertical and horizontal wells subcritical and critical rates" paper SPE n°15377 to be presented at 61st SPE annual Meeting, New Orleans, Oct. 5-8, 1986.
28. Crawford, P.B., Collins, R.E.: "Estimated Effect of Vertical Fractures on Secondary Recovery" Trans. AIME, V. 201, 1954, 192-196.
29. Muskat, M., Wyckoff, R.D.: "A Theoretical Analysis of Water-Flooding Networks" trans. AIME, V. 107, 1934, 62-76.