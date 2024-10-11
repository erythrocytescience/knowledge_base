---
title: "Осесимметричная задача фильтрации вблизи скважины с трещиной ГРП"
date: 2024-07-03
tags: ["однофазка", "метод разделения переменных", "ГС", "ГРП"]
math: true

---
## Постановка 

Рассмотрим осисимеетричную задачу фильтрации вблизи горизонтальной скважины (ГС) с трансверсальной трещинами многостадийного гидроразрыва 
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
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dR}{dr}\right) = \lambda R, 
\;\;\; R(r_w) = p_w, \;\;\; R(r_f) = p_r.
\qquad(8)
$$
2. для \(z\)
$$
\dfrac{d^2Z}{dz^2} = - \lambda Z, \;\;\; Z(d) = 1, \;\;\; \left.\dfrac{\partial Z}{\partial z}\right|_{z=0} = 0.
\qquad(9)
$$

### Решение ОДУ для функции \(z\)
Уравнение (9) стандратное ОДУ второго порядка с решением вида 
$$
Z(z) = A\cos\left(\sqrt{\lambda} z\right) + B \sin\left(\sqrt{\lambda} z\right)
\qquad(10)
$$
производная
$$
\dfrac{dZ}{dz}=-A\sqrt{\lambda}\sin\left(\sqrt{\lambda} z\right) + B \sqrt{\lambda}\cos\left(\sqrt{\lambda} z\right)
\qquad(11)
$$
Подставив (5) в (11) получим
$$
\left.\dfrac{dZ}{dz}\right|_{z=0}=B\sqrt{\lambda} =0
$$
Отсюда следует, что \(B=0\), тогда (10) примет вид
$$
Z(z) = A\cos\left(\sqrt{\lambda}z\right).
\qquad(12)
$$
Чтобы определить \(A\) обратимся к (4) : \(p(r,z=d)=R(r)Z(d) = p_w\), значит
$$
A\cos\left(\sqrt{\lambda}d\right) = 1 \Rightarrow \cos\left(\sqrt{\lambda}d\right) = 1
$$
$$
\sqrt{\lambda_n}d = 2n\pi \Rightarrow \lambda_n = \dfrac{\left(2n\pi\right)^2}{d^2}, n=0,1,2,3....
$$
Окончательно
$$
Z(z) = \cos\left(\dfrac{2n\pi}{d} z \right), n=0,1,2,3....
\qquad(13)
$$

### Решение ОДУ для функции \(r\)
Уравнение (8) это уравнение Бесселя нулевого порядка, так как (8) можно записать как 
$$
\dfrac{d^2R}{dr^2} + \dfrac{1}{r}\dfrac{dR}{dr} - \lambda R = 0
\qquad(14)
$$
А модифированное уравнение Бесселя \(\nu\)-порядка выглядит как
$$
r^2 \frac{d^2R}{dr^2} + r \frac{dR}{dr} - \left(r^2 \lambda - \nu^2\right) R = 0
\qquad(15)
$$

Общее решение такого уравнение имеет вид
$$
R(r) = C \cdot I_0\left(\sqrt{\lambda}r\right) + D \cdot K_0\left(\sqrt{\lambda}r\right),
\qquad(16)
$$
где \(I_0\) и \(K_0\) -- модифицированные функции Бесселя первого и второго порядка, соответственно.
Чтобы определить коэффициенты \(C\) и \(D\) воспользуемся граничными условиями (2), (3)
$$
\begin{array}l
p(r,z) = R(r)Z(z) = p_w \;\; \text{при} \;\; r = r_w, 0 < z < d \Rightarrow R(r_w)=p_w \\[8pt]
p(r,z) = R(r)Z(z) = p_r \;\; \text{при} \;\; r = r_f, 0 < z < d \Rightarrow R(r_f)=p_r
\end{array}
\qquad(17)
$$

$$
\begin{array}l
C_n \cdot I_0\left(\dfrac{2n\pi}{d}r_w\right) + D_n \cdot K_0\left(\dfrac{2n\pi}{d}r_w\right) = p_w, \\[10pt]
C_n \cdot I_0\left(\dfrac{2n\pi}{d}r_f\right) + D_n \cdot K_0\left(\dfrac{2n\pi}{d}r_f\right) = p_r
\end{array}
\qquad(18)
$$

[Решением](/common/solve_two_variable_system/) системы (18) будет
$$
\begin{array}l
C_n = \dfrac{p_w \cdot K_0\left(\dfrac{2n\pi}{d}r_f\right) - p_r \cdot K_0\left(\dfrac{2n\pi}{d}r_w\right)}{G_n} \\ \\ 
D_n = \dfrac{p_r \cdot I_0\left(\dfrac{2n\pi}{d}r_w\right) - p_w \cdot I_0\left(\dfrac{2n\pi}{d}r_f\right)}{G_n} \\ \\ 
G_n = I_0\left(\dfrac{2n\pi}{d}r_w\right) \cdot K_0\left(\dfrac{2n\pi}{d}r_f\right) - 
K_0\left(\dfrac{2n\pi}{d}r_w\right) \cdot I_0\left(\dfrac{2n\pi}{d}r_f\right)
\end{array}
\qquad(19)
$$

### Частное решение
Найдем частное решение при \(\lambda_n = 0\).
Частное решение будем искать в виде
$$
p_0(r,z) = R_0(r)Z_0(z)
\qquad(20)
$$
- для функции \(z\) получим из (9)
$$
\dfrac{d^2 Z_0}{dz^2}=0, \;\;\; Z_0(d) = 1, \;\;\; \left.\dfrac{\partial Z_0}{\partial z}\right|_{z=0} = 0.
$$
Общий вид решения такого уравнения \(Z_0(z) = A + Bz\).
С учетом г.у
$$
\left.\dfrac{dZ_0}{dz}\right|_{z=0} = B = 0
$$
Отсюда \(B = 0\).
При \(Z_0(z=d)=1\), тогда \(A = 1\).
Значит
$$
Z_0(z) = 1
$$

- для функции \(r\) из (20) и (8)
$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dR_0}{dr}\right) = 0, \;\;\; R_0(r_w) = p_w, \;\;\; R_0(r_f) = p_r.
$$
[Решение](/common/radial_laplace_1d/) такого уравнения
$$
R_0(r) = \dfrac{p_r\ln\left(\dfrac{r}{r_w} \right) + p_w\ln\left(\dfrac{r_f}{r} \right)}{\ln\left(\dfrac{r_f}{r_w} \right)}
$$



## Финальное решение
$$
p(r,z) = R_0 Z_0 +  \sum_{n=1}^{\infty}\left[C_n I_0\left(\dfrac{2n\pi}{d}r\right)+D_n K_0\left(\dfrac{2n\pi}{d}r\right) \right]
\cos \left( \dfrac{2n\pi}{d}z\right)
$$




## Список литературы
1. Баренблатт.
2. С.В. Ревина, Л.И. Сазонов, О.А. Цывенкова. Уравнения математической физики. Задачи и решения. Ростов: ЮФУ, 2008. — 169 с.