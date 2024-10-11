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

Для простоты примем \(p_w = 0\).


## Решение
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
Уравнение (8) это модифицированное уравнение Бесселя нулевого порядка, так как (8) можно записать как 
$$
\dfrac{d^2R}{dr^2} + \dfrac{1}{r}\dfrac{dR}{dr} - \lambda R = 0
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
$$




## Список литературы
1. Баренблатт.
2. С.В. Ревина, Л.И. Сазонов, О.А. Цывенкова. Уравнения математической физики. Задачи и решения. Ростов: ЮФУ, 2008. — 169 с.