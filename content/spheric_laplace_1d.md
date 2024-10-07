---
title: 'Решение одномерного уравнения пьезопроводности при сферической симметрии'
date: 2024-07-05
tags: ["одномерная", "сферическая симметрия", "пьезопроводность", "давление"]
math: true

---

Рассмотрим уравнение 
$$
\begin{array}l
\dfrac{1}{r^2}\dfrac{d}{dr} \left(r^2\dfrac{dp}{dr}\right) = 0, \;\; r_{w} \leq r \leq r_{c}; \\
p(r_{w}) = p_{w}, \;\; p(r_{c}) = p_{c}
\end{array}
\qquad (1)
$$

Решение уравнение будет в виде
$$
\displaystyle
\begin{array}l
r^2 \dfrac{dp}{dr} = c_{1} \;\; \Rightarrow \dfrac{dp}{dr} = \dfrac{c_{1}}{r^2} \Rightarrow \operatorname{\Large\int}{\dfrac{dp}{dr} dr} = c_{1} \cdot \operatorname{\Large\int}{\dfrac{1}{r^2}dr} \Rightarrow \;\; p(r) = \dfrac{-c_{1}}{r} + c_{2}
\end{array}
\qquad (2)
$$

Для нахождения коэффициентов \(c_{1}, c_{2}\) составим систему уравнений, используя (2) и граничные условия из (1)

$$
\left\{
\begin{array}l
p(r_{w}) & = -\dfrac{c_{1}}{r_w} + c_{2} & = p_{w} \\
p(r_{c}) & = -\dfrac{c_{1}}{r_{c}} + c_{2} & =  p_{c} \\
\end{array}
\right.
\qquad (3)
$$

Вычтем первое (из (3)) уравнение из второго
$$
c_{1}  \cdot \left[\dfrac{1}{r_{w}} - \dfrac{1}{r_{c}}\right] = p_{c} - p_{w},
$$

Откуда получим
$$
c_{1} = \dfrac{\left(p_{c} - p_{w}\right) r_w r_c}{(r_{c} - r_{w})}.
$$

Подставим \(c_1\) в первое уравнение из (3) и найдем \(c_2\).
$$
c_{2} = p_w + \dfrac{c_1}{r_w} = p_w + \dfrac{\left(p_{c} - p_{w}\right) r_c}{(r_{c} - r_{w})}
$$

Тогда получим решение
$$
\begin{array}l
p(r) = p_w + \dfrac{\left(p_{c} - p_{w}\right) r_c}{(r_{c} - r_{w})} - 
\dfrac{\left(p_{c} - p_{w}\right) r_w r_c}{(r_{c} - r_{w})} \cdot \dfrac{1}{r}
\end{array}
$$

<div style="border: 3px solid red">
$$
\begin{array}l
p(r) = \dfrac{p_c \cdot r \cdot r_c + \left(\left(p_w-p_c\right)\cdot r_c - p_w \cdot r \right) \cdot r_w}{r \left( r_c - r_w\right)}
\end{array}
\qquad (4)
$$
</div>
