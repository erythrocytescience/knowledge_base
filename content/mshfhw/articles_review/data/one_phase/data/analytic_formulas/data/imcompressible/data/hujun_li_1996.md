---
title: "Hujin Li 1996. A New Method to Predict Performance of Fractured Horizontal Wells"
date: 2024-07-12
tags: ["аналитическая формула", "Hujin Li", "ГС", "МГРП", "оценка дебита", "обзор статьи"]
language: 'ru-Ru'
math: true
---

<details>
<summary>Детали</summary>
<dl>
    <dt><b>авторы</b>: Hujun Li, Zhengqi Jia, and Zhaosheng Wei</dt>    
    <dt><b>Название</b>: A Simple Analytical Model for Predicting Productivity of Multifractured Horizontal Wells</dt>
    <dt><b>год</b>: 1996</dt>
    <dt><b>DOI</b>: <a href ="https://doi.org/10.2118/37051-MS">Cсылка</a></dt>
</dl>
</details>

### Аннотация
Когда нефтяные месторождения разрабатываются с помощью ГС, обычно необходимо проводить гидроразрыва для достижения экономической целесообразности. Отсюда возникает необходимость для прогнозирования продуктивности ГС с гидроразрывом. В данной статье представлен метод для оценки продуктивности ГС с гидроразрывом и с частичной перфорацией. Использую данную модель были изучены факторы, влияющие на продуктивности ГС с гидроразрывом. Два примера из месторождения Daqing было проанализированы, используя наш метод. Расчеты и анализ показали, что результаты, полученные с помощью данного метода, согласуются с результатыми фактических замеров.

### Введение

### Модель

#### Физическая модель
Для понимания механизма течения нефти от границы области дренирования до ствола горизонтальной скважины с трещина гидроразрыва в пласте, были проведены электролитические эксперименты в лаборатории [8]. На основе этих экспериментов были предложены две упрощенные модели:

1. ГС с МГРП: предполагается два течения: от контура дренирования в трещины, из трещин в ГС. все течение может быть 
поделено на \(N\) регионов вдоль ствола ГС, каждый из которых содержит в центре себя трещину (рис. 1).

{{< figure src="/mshfhw/analytic_formulas/images/image_hujin_li_1996_1.png" caption="Рис. 1. " >}}

2. ГС с МГРП и ГС перфорирована, тогда течения будут из пласта в трещину и далее в скважина и из пласта непосредственно в скважину. все течение может быть поделено на \(N\) регионов вдоль ствола ГС, каждый из которых содержит в центре себя трещину и участок ствола ГС (рис. 2).

{{< figure src="/mshfhw/analytic_formulas/images/image_hujin_li_1996_2.png" caption="Рис. 2. " >}}

#### Математическая модель

##### ГС с \(n\) вертикальными трещинами

Как показано на рис. 1. жидкость сначала течет из пласта в трещины, далее из трещин в скважину. Чтобы 
посчитать полный дебит, мы должно посчитать дебит в каждом регионе, затем просуммировать. 

Перепад давления, вызванный течением жидкости на участке пласта
$$
\triangle p_1 = \dfrac{Q_i \mu \left(L^* - x_f\right)}{2 k h \left(L_{f_1} + L_{f_2}\right)} + 
\dfrac{Q_i \mu}{2 k h x_f \left(\dfrac{1}{L_{f_1}} + \dfrac{1}{L_{f_2}}\right)}
\qquad(1)
$$

Перепад давления, вызванный течение в трещине
$$
\triangle p_2 = \dfrac{Q_i}{2} \dfrac{\mu_0 x_f}{k_f h w}
\qquad(2)
$$

Перепад давления, вызванный сходимостью вблизи ГС
$$
\triangle p_3 =  \dfrac{1}{2 \pi} \dfrac{Q_i \mu}{k_f w} \left(\ln\left[\dfrac{h}{2r_w}\right] - \dfrac{\pi}{2}\right)
\qquad(3)
$$

В итоге, полный перепад давления в одном регионе
$$
\triangle p = p_r - p_w = \dfrac{Q_i \mu}{2}
\left[
    \dfrac{L^* - x_f}{kh \left({L_f}_1 + {L_f}_2\right)} + 
    \dfrac{1}{k h x_f \left(\dfrac{1}{{L_f}_1} + \dfrac{1}{{L_f}_2} \right)} +
    \dfrac{x_f}{k_f h w} +
    \dfrac{1}{k_f w \pi} \left( \ln \dfrac{h}{2r_w} - \dfrac{\pi}{2}\right)
\right]
\qquad(4)
$$

\(L_{f_1}\) это половина расстояние между текущей трещиной и той, которая слева от нее, \(L_{f_2}\) -- которая справа от нее.
Если интересующая нас трещина находится на краю ГС, тогда \(L_{f_1}\) или \(L_{f_2}\) будут равны расстоянию между трещиной и внешней границей.

Отсюда 
$$
Q_i = \dfrac{2\pi k h \left(p_r - p_w\right)}{\mu} \cdot \dfrac{1}{A}
\qquad(5)
$$

$$
A = \dfrac{\pi \left(L^* - x_f\right)}{\left({L_f}_1 + {L_f}_2\right)} + 
    \dfrac{\pi}{x_f \left(\dfrac{1}{{L_f}_1} + \dfrac{1}{{L_f}_2} \right)} +
    \dfrac{\pi x_f k}{k_f w} +
    \dfrac{k h}{k_f w} \left( \ln \dfrac{h}{2r_w} - \dfrac{\pi}{2}\right)
\qquad(6)
$$

Уравнения (5) и (6) в системе СИ. Если ГС имеет \(n\) вертикальных трещин, тогда общий дебит
$$
Q = \sum_{i=1}^n Q_i
\qquad(7)
$$

###### Калькулятор 

  <script type="module" src="/js/hujunli1996_calculator.js" defer></script>
  <script type="module" src="/js/hujunli1996_plotter.js"></script>

<table id="tableInput" border="1">
    <tr>
        <th>Параметр</th>
        <th>Значение</th>
    </tr>
    <tr>
        <td>Среднее давление пласта, атм</td>
        <td><input type="number" id="press_res" min="1" value="100"></td>
    </tr>
    <tr>
        <td>Высота пласта, м</td>
        <td><input type="number" id="h_res" min="1" value="10"></td>
    </tr>
    <tr>
        <td>Радиус контура питания, м</td>
        <td><input type="number" id="rc" min="1" value="150"></td>
    </tr>
    <tr>
        <td>Проницаемость пласта, Д</td>
        <td><input type="number" id="k_res" min="0.001" step="0.001" value="1"></td>
    </tr>
    <tr>
        <td>Давление на скважине, атм</td>
        <td><input type="number" id="press_well" min="1" value="10"></td>
    </tr>
    <tr>
        <td>Радиус скважины, см</td>
        <td><input type="number" id="rad_well" min="1" value="8"></td>
    </tr>
    <tr>
        <td>Длина скважины, м</td>
        <td><input type="number" id="len_well" min="1" value="1000"></td>
    </tr>
    <tr>
        <td>Вязкость жидкости, сП</td>
        <td><input type="number" id="mu" min="0.001" step="0.001" value="1"></td>
    </tr>
    <tr>
        <td>Количество трещин, шт</td>
        <td><input type="number" id="frac_count" min="2" value="2"></td>
    </tr>
    <tr>
        <td>Полудлина трещин, м</td>
        <td><input type="text" id="frac_xfs" value="100, 100"></td>
    </tr>
    <tr>
        <td>Координата (глубин) трещин, м</td>
        <td><input type="text" id="frac_yfs" value="100, 200"></td>
    </tr>
    <tr>
        <td>Ширина трещин, мм</td>
        <td><input type="text" id="frac_ws" value="5, 5"></td>
    </tr>
    <tr>
        <td>Проницаемость трещин, Д</td>
        <td><input type="text" id="frac_kfs" value="1000, 1000"></td>
    </tr>
</table>

**Внимание:** значения для трещин задаются через запятую. Например, полудлина трех трещин "100, 200, 120".

<br><br>
    <input type="button" value="Вычислить" id="calculateButton">
    <input type="button" value="Нарисовать область" id="drawNoWellDomainButton">
<br><br>

<table id="tableOutput" border="1">
  <tr>
    <th>Параметр</th>
    <th>Значение</th>
  </tr>
  <tr>
    <td>\(Q, \;\; \text{м}^3/c\)</td>
    <td id="q_value"></td>
  </tr>
</table>

<svg id="hujunLiDomain" baseProfile="tiny" height="120mm" version="1.2" width="157mm" xmlns="http://www.w3.org/2000/svg"></svg>


##### ГС с \(n\) вертикальными трещинами и частично перфорированная

### Факторный анализ и примеры

#### Пример 1

#### Пример 2

### Заключение

### Мои расчеты
 
{{< figure src="/mshfhw/analytic_formulas/images/image_hujin_li_1996_3.png" caption="Рис. 3. " >}}

### Номенклатура
- \(L^*\) -- расстояние от внешней границы дренирования до ствола ГС, м
- \(n\) -- количество трещин, б.р.

### References
1. Joshi, S.D.: "A Review of Horizontal Well and Drainhole Technology," paper SPE 16868 presented at the 62nd Annual Techni- cal Conference and Exhibition of the Society of Petroleum Engi- neer held in Dallas, TX, October 27-30, 1987.
2. Bendakhlia, H. and Aziz, K.: "Inflow Performance Relationships for Solution-Gas Drive Horizontal Well," paper SPE 19823 presented at the 64th Annual Technical Conference and Exhibition of the Society of Petroleum Engineer held in San Antonio, TX, October 8-11, 1989.
3. Norris, S.O., Hunt, J.L., Soliman, M.Y. and Puthigai, S.K.: "Predicting Horizontal Well Performance: A Review of Current Te- chnology," paper SPE 21793 presented at the Western Regional Meeting, Long Besch, CA, March 20-22, 1991.
4. Karcher, R.J., Giger, F.M. and Combe, J.: "Some Practical Formulas to Predict Horizontal Well Behavior, paper SPE 15430 presented at the 61st Annual Technical Conference and Exhibition of the Society of Petroleum Engineer held in New Orleans, LA, October 5-8, 1986.
5. Soliman, M.Y., Hunt, J.L. and Ei Rabbaa: "Fracturing Aspects of Horizontal Wells," JPT (August 1990) 966.
6. Mukherjee, H. and Economides, M.J.: "A Parametric Comparison of Horizontal and vertical Well Performance," SPE Formation Eveluation (June 1991) 209.
7. Economides, M.J., McLennan, J.D., Brown, E. and Rocgiers, J. C.: "Performance and Stimulation of Horizontal Well," World Oil (June 1989) 41.
8. Jia, Z.Q., Li, H.J. and Sun, X.H.: "An Experimental Study of Pressure Distribution on Electrolytic Models for Horizontal Wells," Journal of Daging Petroleum Institute, Vol. 18, No 4, 1994. 
9. Jia, Z.Q., Zhang, L.N., Wang, L.J., and Ying, D.Y.: Methods for Designing and Developing Oil Fields, the Press of Haerbin Industry University, Haerbin, China (1994) 210.