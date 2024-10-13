---
title: "Осесимметричная задача фильтрации вблизи скважины с трещиной ГРП (упрощенная)"
date: 2024-07-03
tags: ["однофазка", "метод разделения переменных", "ГС", "ГРП"]
math: true

---
## Постановка 

Рассмотрим осисимметричную задачу фильтрации вблизи горизонтальной скважины (ГС) с трансверсальной трещинами многостадийного гидроразрыва 
пласта (МГРП). 
Для удобства возьмем одну ячейку периодичности: область решения представляет собой цилиндр радиуса \(r_f\), в центре которого расположена ГС 
радиуса \(r_w\) и длины \(d\)-- половина расстояния между трещинами. Трещина представлена в виде диска радиуса \(r_f\).

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/axisym_cylinder_main.png" caption="Рис. 1. Область решения задачи" >}}

Запишем уравнение для давления [1]:

$$
\displaystyle
\dfrac{1}{r}\dfrac{\partial}{\partial r}\left(r\dfrac{\partial p}{\partial r}\right) + \dfrac{\partial^2 p}{\partial z^2} = 0 
\qquad(1)
$$
с граничными условиями
- на внешней границе \(\Gamma = \left\{ r=r_f, 0 < z < d \right\}\) задано постоянное давление
$$
\bold{x} \in \Gamma: p = p_r, \;\; \bold{x} = \left(r, \phi, z\right)
\qquad(2)
$$
- на скважине \(\gamma = \left\{ r=r_w, 0 < z < d \right\}\) задано постоянное давление
$$
\bold{x} \in \gamma: p = p_w
\qquad(3)
$$
- на трещине \(F = \left\{ r_w < r < r_f, z = d\right\}\) задано постоянное давление
$$
\bold{x} \in F: p = p_w
\qquad(4)
$$
- правый торец внешнего цилиндра изолирован (ось симметрии)
$$
r_w < r < r_f, \; z = 0 : \dfrac{\partial p}{\partial z} = 0
\qquad(5)
$$


## Решение
Для простоты примем \(p_w = 0\).

Будем решать задачу (1)-(5) [методом разделения переменных](https://ru.m.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85) [2].
Идея заключается в том, что будем искать решение в виде:
$$
p\left(r,z\right)=R(r)Z(z).
\qquad(6)
$$

Подставив (6) в (1), получим:
$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{d}{dr}\left(R(r)\right) \right)Z(z) + R(r)\dfrac{d^2}{dz^2}\left(Z(z)\right) = 0
\qquad(7)
$$
Поделим обе части уравнение (7) на \(R(r)Z(z)\)
$$
\dfrac{1}{R(r)}\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{d}{dr}\left(R(r)\right) \right) = - \dfrac{1}{Z(z)}\dfrac{d^2}{dz^2}\left(Z(z)\right) = \lambda,
$$
где \(\lambda\) -- некоторая константа.
Получаем обыкновенные дифференциальные уравнения для определения функций \(R(r)\) и \(Z(z)\)
1. для \(r\)
$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dR}{dr}\right) - \lambda R = 0,
\;\;\; R(r_w) = 0, \;\;\; R(r_f) = p_r.
\qquad(8)
$$
2. для \(z\)
$$
\dfrac{d^2Z}{dz^2} + \lambda Z = 0, \;\;\; Z(d) = 0, \;\;\; \left.\dfrac{\partial Z}{\partial z}\right|_{z=0} = 0.
\qquad(9)
$$

### Решение ОДУ для функции \(z\)
Для задачи (9) собственные значения и собственные функции имеют вид [2]
$$
\lambda_n = \dfrac{\pi^2\left(2n-1\right)^2}{4d^2}, \;\;\;
Z_n(z) = \cos \left( \dfrac{\pi\left(2n-1\right)}{2d}z\right)
\qquad(10)
$$


### Решение ОДУ для функции \(r\)
Уравнение (8) это модифицированное уравнение Бесселя нулевого порядка, так как (8) можно записать как (умножив на \(r^2\))
$$
r^2\dfrac{d^2R}{dr^2} + r\dfrac{dR}{dr} - r^2\lambda R = 0
\qquad(11)
$$
А модифированное уравнение Бесселя \(\nu\)-порядка выглядит как
$$
r^2 \frac{d^2R}{dr^2} + r \frac{dR}{dr} - \left(r^2 \lambda + \nu^2\right) R = 0
\qquad(12)
$$

Общее решение (12) при \(\nu = 0\) имеет вид 
$$
R(r) = C \cdot I_0\left(\sqrt{\lambda}r\right) + D \cdot K_0\left(\sqrt{\lambda}r\right),
\qquad(13)
$$
где \(I_0\) и \(K_0\) -- модифицированные функции Бесселя первого и второго порядка, соответственно.
Чтобы определить коэффициенты \(C\) и \(D\) воспользуемся граничными условиями из (8)

$$
\begin{array}l
C_n \cdot I_0\left(\sqrt{\lambda_n}r_w\right) + D_n \cdot K_0\left(\sqrt{\lambda_n}r_w\right) = 0, \\[10pt]
C_n \cdot I_0\left(\sqrt{\lambda_n}r_f\right) + D_n \cdot K_0\left(\sqrt{\lambda_n}r_f\right) = p_r
\end{array}
\qquad(14)
$$

[Решением](/common/solve_two_variable_system/) системы (14) будет
$$
\begin{array}l
C_n = -\dfrac{p_r \cdot K_0\left(\sqrt{\lambda_n}r_w\right)}{G_n}, \;\;\;
D_n = \dfrac{p_r \cdot I_0\left(\sqrt{\lambda_n}r_w\right)}{G_n} \\ \\ 
G_n = I_0\left(\sqrt{\lambda_n}r_w\right) \cdot K_0\left(\sqrt{\lambda_n}r_f\right) - 
K_0\left(\sqrt{\lambda_n}r_w\right) \cdot I_0\left(\sqrt{\lambda_n}r_f\right)
\end{array}
\qquad(15)
$$

### Частное решение
Найдем частное нетривиальное решение при \(\lambda_n = 0\).
Частное решение будем искать в виде
$$
p_0(r,z) = R_0(r)Z_0(z)
\qquad(16)
$$
- для функции \(z\) получим из (9)
$$
\dfrac{d^2 Z_0}{dz^2}=0, \;\;\; Z_0(d) = 0, \;\;\; \left.\dfrac{\partial Z_0}{\partial z}\right|_{z=0} = 0.
\qquad(17)
$$
Решение задачи (17) будет 
$$
Z_0 = 0.
$$

- для функции \(r\) из (16) и (8)
$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dR_0}{dr}\right) = 0, \;\;\; R_0(r_w) = 0, \;\;\; R_0(r_f) = p_r.
$$
[Решение](/common/radial_laplace_1d/) такого уравнения
$$
R_0(r) = p_r\dfrac{\ln\left(r / r_w \right)}{\ln\left(r_f / r_w \right)}
$$



## Финальное решение
$$
p(r,z) = R_0 Z_0 +  \sum_{n=1}^{\infty}\left[C_n I_0\left(\sqrt{\lambda_n}r\right)+D_n K_0\left(\sqrt{\lambda_n}r\right) \right]
\cos \left( \sqrt{\lambda_n}z\right), \;\;\; \lambda_n = \dfrac{\pi^2\left(2n-1\right)^2}{4d^2}
\qquad(18)
$$

## Численное решение 

Численное решение задачи (18) в Maxima.

<details>
<summary>Исходный код в Maxima</summary>

```python
/* Load necessary package */
load(draw)$

/* Define constants */
p_r : 1$ /* Example value, adjust as needed */
r_w : 0.5$ /* Example well radius */
r_f : 2$ /* Example fracture radius */
d : 1$ /* Height in the z-direction */
terms : 10$ /* Number of terms for the summation */

/* Define functions */
R0(r) := p_r * log(r / r_w) / log(r_f / r_w)$
Z0(z) := 1$

lambda_n(n) := (2 * n - 1)^2 * %pi^2 / (4 * d^2)$

I0(x) := bessel_i(0, x)$
K0(x) := bessel_k(0, x)$

/* Coefficients */
C_n(n) := -p_r * K0(sqrt(lambda_n(n)) * r_w) / G_n(n)$
D_n(n) := p_r * I0(sqrt(lambda_n(n)) * r_w) / G_n(n)$

G_n(n) := I0(sqrt(lambda_n(n)) * r_w) * K0(sqrt(lambda_n(n)) * r_f)
          - K0(sqrt(lambda_n(n)) * r_w) * I0(sqrt(lambda_n(n)) * r_f)$

/* Define pressure function p(r, z) */
p_rz(r, z) := R0(r) * Z0(z)
            + sum( (C_n(n) * I0(sqrt(lambda_n(n)) * r)
            + D_n(n) * K0(sqrt(lambda_n(n)) * r)) * cos(sqrt(lambda_n(n)) * z), n, 1, terms )$

/* Plot the solution */
draw3d(
    explicit(p_rz(r, z), r, r_w, r_f, z, 0, d),
    surface_hide = true,
    color = green,
    xlabel = "r",
    ylabel = "z",
    zlabel = "p(r, z)",
    title = "Pressure distribution p(r, z)"
)$
```
</details>

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/axisym_cylinder_maxima.png" caption="Рис. 2. Распределение давления" >}}


## Численное решение задачи в MRST

Рис.2 получен при следующих параметрах
\(N_x = 101, N_y= N_x, N_z = 20\)

\(d = 0.1, r_w = 10^{-3}, r_f = 0.2\)


{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/axisym_cylinder_press1.png" caption="Рис. 2. Распределение давления" >}}

Рис. 3 получен при следующих параметрах

\(N_x = 80, N_y= 70, N_z = 40\)

\(r_w = 10^{-3}\)

\(rfs = linspace(0.1, 0.5, 5); \;\;\; ds =  linspace(0.1, 2.0, 5);\)

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/axisym_cylinder_maps1.png" caption="Рис. 3. Дебит" >}}





## Список литературы
1. Баренблатт.
2. С.В. Ревина, Л.И. Сазонов, О.А. Цывенкова. Уравнения математической физики. Задачи и решения. Ростов: ЮФУ, 2008. — 169 с.