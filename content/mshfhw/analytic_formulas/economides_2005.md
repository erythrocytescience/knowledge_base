---
title: "Wei, Economides 2005. Transverse Hydraulic Fractures From a Horizontal Well"
date: 2024-07-20
tags: ["аналитическая формула", "Economides", "ГС", "МГРП", "оценка дебита", "статья"]
language: 'ru-RU'
math: true
---

<details>
<summary>Детали</summary>
<dl>
    <dt><b>авторы</b>: Y. Wei and M.J. Economides, U. of Houston</dt>    
    <dt><b>Название</b>: Transverse Hydraulic Fractures From a Horizontal Well</dt>
    <dt><b>год</b>: 2005</dt>
    <dt><b>doi</b>: <a href ="https://doi.org/110.2118/94671-MS">Cсылка</a></dt>
</dl>
</details>

### Аннотация
ГС без МГРП экономически не привлекательные на месторождениях с вертикальными скважины с ГРП. 
Во многих местах такие скважины показали свою эффективность перед ГС. 
Поэтому надо на ГС тоже делать ГРП.

На глубинах залегания нефтяных пластов поле напряжение таково, что трещины получаются вертикальными и направленными 
по нормали к минимальному горизонтальному напряжению (???). Поэтому важна ориентация трещин. Они бывают двух видов: трансверсальные и longitudinal. В случае трансверсальных трещин, на скважине можно сделать несколько таких трещин (многостадийный ГРП).
В данной работе представлены вычислительные процедуры для распределения (или падения) давления в трещинах, а также безразмерный 
индекс продуктивности. Очевидно, что одиночная трансверсальная трещина на ГС не может дать такую же продуктивность, как вертикальная скважина с ГРП.

Таким образом, вопрос, на который мы отвечаем и даем количественную оценку, — это влияние множественных поперечных трещин по сравнению с базовым вариантом вертикальной скважины с трещиной.

Отличительной особенностью нефтяных и газовых пластов является эффект турбелентности, который часто наблюдается 
при эксплуатации газовых скважин, но обычно несущественных для нефтяных. Мы представляем сравнительный анализ трансверсальных трещин на ГС для нефтяных и газовых месторождения, показывая их существенное различие

### Введение
Посколько человеческие действия не могут повлиять на ориентацию трещин, возникают два очевидных ограничения
1. ГС бурится вдоль ожидаемой траектории трещины -- продольная трещина;
2. ГС бурится перпендикулярно ожидаемой траектории трещины -- трансверсальная трещина [3, 4, 5].

Продольная трещина на ГС предпочтительнее на относительно высокопроницаемых пластах [6, 7]. Но бурение таких скважин намного сложнее.

Villegas и др. [6], Valko, Economides, Soliman и др. [9, 10] сравнили продуктивность продольной трещина на ГС и продуктивность вертикальной скважины с ГРП, а также с ГС МГРП. Они выяснили, что для трещины одинаковой длины и проводимости, продуктивность 
вертикальной скважины с ГРП и ГС с продольной трещиной почти одинаковая. Также они определили, что при одинаковом объеме трещины, несколько трансверсальных трещин превосходят продольную трещину. Так как продуктивность продольной трещины одинакова с вертикальной скважиной с ГРП, существующее решение для вертикальной скважины с ГРП может быть использовано для продольной трещины на ГС [5, 11].

Почти во всех модели МГРП на ГС предполагается, что трещины трансверсальные. 


### Приток к трансверсальной трещине на ГС

Структура потока в трансверсальной трещине, пересекающая ГС, показана на рис. 1. 

{{< figure src="/mshfhw/analytic_formulas/images/image_economides_2005_1.png" caption="Рис. 1 Одиночная трансверсальная трещина на ГС" >}}

Предположим, что ГС является центром пласта толщины \(h\). Тогда мы можем рассмотреть участок радиуса \(h / 2\) вокруг ствола скважины. Снаружи трещины поток из пласта линейный, внутри трещины поток сходится к радиальному [4]. Такая комбинация поток ведет в дополнительному падению давления, которое в традиционных вычислениях для месторождений, может быть учтено с помощью скин эффекта, обозначаемого как \(s_c\).

<a href ="/mshfhw/analytic_formulas/economides_1991">Mukherjee и Economides (1991)</a> вывели выражение для вычисления \(s_c\)
$$
s_c = \dfrac{k h}{k_f w}\left[\right],
\qquad(1)
$$
где \(k\) -- проницаемость пласта, \(h\) -- толщины, \(k_f\) проницаемость трещины, \(r_w\) радиус скважины, \(w\) ширина раскрытия трещины (которая может быть определена используя UFD подход[15]).

В (1) предполагается, что поток сначала идет из пласта в трещину, затем из трещины в скважину. Также предполагается, что приток к остальной части ствола скважины пренебрежимо мал. Во всех наших исследованиях используется данные предположения.

Безразмерная продуктивность \(J_{DTH}\) трансверсальной трещины на ГС с учетом (1)
$$
J_{DTH} = \dfrac{1}{\dfrac{1}{J_{DV}} + s_c},
\qquad(2)
$$
где \(J_{DV}\) -- безразмерная продуктивность вертикальной скважины с ГРП.

Очевидно, что одна трансверсальная трещине не может дать такую же продуктивность как вертикальная скважина с ГРП. 
Поэтому нужно увеличивать \(k \cdot w\), т.е. выполнять концевое экранирование трещин, которое ведет к увеличению ширины раскрытия трещин и/или использовать высококлассный проппант (более проницаемую упаковку). Очевидно, что множественные поперечные трещины, пересекающие горизонтальную скважину, необходимы для привлекательности этой конфигурации (см. Рис. 2).

Таким образом, вопрос в том, каково влияние МГРП по сравнению с базовым вариантом вертикальной скважины с трещиной?

Здесь мы определяем эквивалентное количество вертикальных скважин \(X\), как отношение безразмерного индекса продуктивности горизонтальной скважины с трансверсальными трещинами \(J_{DTH}\) к безразмерному индексу продуктивности вертикальной скважины с трещиной \(J_{DV}\).

$$
X = \dfrac{J_{DTH}}{J_{DV}}
\qquad(3)
$$

Поскольку \(J_{DV}\) и \(s_c\) являются функциями массы проппанта и проницаемости упаковки проппанта, мы проводим здесь параметрическое исследование, чтобы показать влияние важных переменных пласта и обработки на \(J_{DTH}\), \(J_{DV}\) и \(X\).
Сначала мы рассмотрим поперечные трещины, пересекающие горизонтальных скважин в нефтяных, а затем и в газовых пластах, показывая их существенные различия.

### ГС с трансверсальными трещинами: нефтяной пласт

#### Одиночная трансверсальная трещина - влияние проницаемости проппантной набивки

Из уравнения (1) ясно, что скин-фактор \(s_c\) обратно пропорционален проницаемости проппантной набивки. Поэтому выбор проппанта 
высокого качества будет снижать \(s_c\) и также даст преимущество для безразмерного индекса продуктивности \(J_{DTH}\) и для 
эквивалентного числа вертикальных трещин \(X\).

#### Одиночная трансверсальная трещина - влияние массы проппанта

Безразмерный индекс продуктивности сильно растет с увеличением массы проппанта. Подобный эффект должен наблюдаться и для 
трансверсальных трещин на ГС.

Чтобы опеределить влияние массы проппанта на \(J_{DTH}\), дизайнеры ГРП провели эксперимент...

На рис.4. показано, что увеличение массы проппанта ведет к увеличению \(J_{DTH}\) независимо от проницаемости пласта, но в 
низкопроницаемых пласта \(J_{DTH}\) растет существенее с увеличением массы проппанта, чем в высокопроницаемых пластах.

#### \(J_{DTH}\) и эквивалетное число вертикальных скважине \(X\) для МГРП

#### Влияние изолированных зон на эквивалентное число вертикальных скважин \(X_t\)

### Выводы для нефтедобывающих скважин

1. Проницаемость проппантной упаковки и масса проппанта являются очень важными факторами эффективности поперечных трещин, пересекающих горизонтальную скважину. Какой бы ни была проницаемость пласта, выбор лучшего проппанта и использование больших масс проппанта привлекательны.
2. Чтобы сделать конфигурацию поперечной трещины привлекательной, необходимы множественные поперечные трещины, пересекающие горизонтальную скважину.
3. Количество трещин является, безусловно, наиболее чувствительным фактором, влияющим на эквивалентное количество вертикальных скважин. Разделение площади дренирования на количество обработок увеличивает показатель псевдостационарной продуктивности до значительно большего значения, а в низкопроницаемых коллекторах это значение превышает количество обработок, например, на 1 мД 4 поперечные обработки дают почти 7 эквивалентных по вертикали. трещиноватые скважины. Это означает ускорение восстановления.
4. Для случая, когда общая масса проппанта разделена на количество поперечных обработок, результаты согласуются с общими тенденциями, изложенными в выводах выше, хотя эквивалентное количество вертикальных скважин меньше, как и следовало ожидать.

{{< figure src="/mshfhw/analytic_formulas/images/image_economides_2005_2.png" caption="Рис. 2 МГРП на ГС" >}}


### Nomenclature
- \(s_c\) -- choke skin factor, dimensionless 
- \(k\) -- formation permeability, md 
- \(h\) -- formation thickness, ft 
- \(k\) --proppant-pack permeability, md 
- \(r_w\) -- well radius, ft
- \(w\) --the propped fracture width, in.
- \(x_f\) --the propped fracture half length, ft
- \(h_f\) -- the thickness of the propped fracture, ft
- \(J_D\) = dimensionless productivity index of a transverse fracture intersecting a horizontal well without taking into account of choke skin factor
- \(J_{DTH}\) = dimensionless productivity index of a transverse fracture intersecting a horizontal well
- \(J_{DV}\) = dimensionless productivity index of a fractured vertical well
- \(X\) = Equivalent Number of vertical wells, dimensionless 
- \(X_t\) = the Equivalent Number of vertical wells in the total drainage zone
- \(N_{prop}\) -- Proppant Number, dimensionless
- \(C_{fD}\) -- fracture conductivity, dimensionless
- \(N_{Re}\) -- Reynolds Number
- \(k_{f,e}\) --effective fracture permeability, md

### Список литературы

1. Emanuele, M. A., Minner, W. A., Weijers, L., Broussard, E. J., Blevens, D.M. and Taylor. B.T.: "A case History: Completion and Stimulation of Horizontal Wells with Multiple Transverse Hydraulic Fractures in the Lost Hills Diatomite", Paper SPE 46193, 1998.
2. Eirafie, E. A., Wattenbarger, R. A.: "Comprehensive Evaluation of Horizontal Wells with Transverse Hydraulic Fractures in the Upper Bahariyia Reservoir", Paper SPE 37759, 1997.
3. Crosby, D.G., Yang, Z., and Rahman, S.S.: "Transversely Fractured Horizontal Wells: A Technical Appraise of Gas Production in Australia", Paper SPE 50093, 1998.
4. Economides, M.L., Hill, A.D. and Ehlig-D. Economides, C.A.: Petroleum Production System, Prentice Hall, New Jercy, 1994. 
5. Soliman, M.Y., and Boonen, P.: "Review of Fracturing Horizontal Wells Technology," Paper SPE 36289, 1997.
6. Villegas, M.E., Wattenbarger, R.A., Valkó, P. and Economides, M.J.: "Performance of Longitudinally Fractured Horizontal Wells in High-Permeability Anisotropic Formations," Paper SPE 36453, 1996.
7. Valkó, P. and Economides, M.J.: "Performance of a Longitudinally Fractured Horizontal Well," SPEJ (March 1996), 11-19.
8. Minner, W.A., Ganong, B.L., Demetrius S.L. and Wright, C.A.: "Rose Field: Surface Tilt Mapping Shows Complex Fracture Growth in 2500' Laterals Completed with Uncemented Liners," Paper SPE 83503, 2003.
9. Soliman, M.Y., Hunt, J.L. and Azari, M.: "Fracturing Horizontal Wells in Gas Reservoirs," Paper SPE 35260, 1996.
10. Soliman, M.Y., Hunt, J.L., Azari, M. and Chen, C.C.: "Design and Analysis of Fracturing Horizontal Wells in Gas Reservoirs," Paper SPE 35343, 1996.
11. Soliman, M.Y., Hunt, J.L. and Mehdi, Azari.: "Fracturing Horizontal Wells in Gas Reservoirs," Paper SPE 59096, 1999.
12. Soliman, M.Y., David Adams: "GeoMechanics Aspect of Multiple Fracturing of Horizontal Wells and Vertical Wells" Paper SPE 86992, 2004.
13. Fisher, M.K., Heinze, J.R., Harris, J.R., Davidson, B.M., Wright, C.A. and Dunn, K.P.: "Optimization Horizontal Completion Techniques in the Barnett Shale Using Microseismic Fracture Mapping," Paper SPE 90051, 2004. 
14. Mukherjee, H., Economides, M. J.: "A parametric Comparison of Horizontal and Vertical Well Performance," Paper SPE 18303, 1991.
15. Economides, M.J., Oligney, R.E., Valkó, Unified Fracture Design, Orsa Press, Houston, 2002.
16. Wang, X., Economides, M.J.: "Aggressive Fracture Slashes Turbulence in High-permeability Gas Well," World Oil, July 200.
17. Settari, A., Bale, A., Statoil, Bergen, Bachman, R.C., Floisand, V.: "General Correlation for the Effect of Non-Darcy Flow on Productivity of Fractured Wells," Paper SPE 75715, 2002.
18. Economides, M.J., Oligney, R.E., Valkó: "Applying unified fracture design to nature gas well," World Oil, Oct. 2002.
19. Demarchos, A.S., Chomatas, A.S., Economides, M.J., Mach, J.M., Wolcott, D.S.: "Pushing the Limits in Hydraulic Fracture Design," Paper SPE 86483, 2004.
20. Economides M. J., "Hydraulic Fracturing- a short course by Prof. Michael J. Economides". 2004.