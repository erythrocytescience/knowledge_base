---
title: "Краткое описание аналитических формул оценки дебита ГС с МГРП"
date: 2024-07-12
tags: ["аналитическая формула", "Оценка дебита", "ГС", "МГРП"]
language: 'ru-Ru'
math: true
---

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Picture</th>
      <th>Description</th>
      <th>Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href ="../analytic_formulas/economides_1991">Mukherjee, Economides (1991)</a></td>
      <td>{{< figure src="/mshfhw/analytic_formulas/image_economides_1991_1.png">}}</td>
      <td>
        Область решения: прямоугольный параллелепипед. Скважина находится в центре, трещины ортогональны оси скважины. Трещины бесконечной проницаемости. 
      </td>
      <td>
      $$
        \begin{array}l
            q_f = \dfrac{2 k_{H} \left(2 x_f h\right)\triangle p}{\mu B x} \\
            x = \dfrac{L}{2\left(n-1\right)} \\
            \triangle p = ???
        \end{array}
        % \qquad(1)
      $$
      </td>
    </tr>
    <tr>
      <td><a href ="../analytic_formulas/guo_2009">Guo (2009)</a></td>
      <td>{{< figure src="/mshfhw/analytic_formulas/image_guo_2009_1.png">}}</td>
      <td>
        Область: окружность радиуса \(r_{L}\).
        \(\bar{z_e}\) -- половина среднего расстояния между трещинами
      </td>
      <td>
      $$
        \begin{array}l
            q = \dfrac{1}{ \dfrac{1}{J_R} + \dfrac{1}{J_L} + \dfrac{1}{J_r} } \left(\bar{p} - p_w\right) \\
            J_R = \dfrac{2 \pi k_H h}{\mu B \left(\dfrac{1}{2} \ln\left(\dfrac{4A}{\gamma C_A r_L^2}\right) \right)} \\
            J_L = \sum_{i=1}^n \dfrac{4 k_H h}{\mu B z_{e_i} \sqrt{c_i}} \left(1 - e^{-\sqrt{c_i} x_{f_i}}\right)\\
            J_r = \sum_{i=1}^n \dfrac{\pi k_{fwi} w_{wi}}{6 \mu B \left[\ln\left(\dfrac{h}{2r_{wi}}\right) + \pi - \left( 1.224 - s_i - Dq\right)\right]} \\
            c_i = \dfrac{24 k_h}{z_{e_i}w_i k_{f_i}} \\
            r_L = \sqrt{\dfrac{4 n \bar{z_e} \bar{x_f}}{\pi}}
        \end{array}
        % \qquad(1)
      $$
      </td>
    </tr>
    <tr>
      <td><a href ="../analytic_formulas/hujun_li_1996">Hujun, Li (1996)</a></td>
      <td>{{< figure src="/mshfhw/analytic_formulas/image_hujin_li_1996_1.png">}}</td>
      <td>
      Описание
      </td>
      <td>
      $$
        \begin{array}l
          Q_i = \dfrac{2\pi k h \left(p_r - p_w\right)}{\mu} \cdot \dfrac{1}{A} \\
          A = \dfrac{\pi \left(L^* - x_f\right)}{\left({L_f}_1 + {L_f}_2\right)} + 
              \dfrac{\pi}{x_f \left(\dfrac{1}{{L_f}_1} + \dfrac{1}{{L_f}_2} \right)} + \\
              \dfrac{\pi x_f k}{k_f w} +
              \dfrac{k h}{k_f w} \left( \ln \dfrac{h}{2r_w} - \dfrac{\pi}{2}\right)
        \end{array}
      $$
      </td>
    </tr>
  </tbody>
</table>

### Внешний контур: прямоугольный параллелепипед

#### <a href ="../analytic_formulas/economides_1991">Mukherjee, Economides (1991)</a>

<center>
{{< figure src="/mshfhw/analytic_formulas/image_economides_1991_1.png" caption="Рис.1 " width="300" >}}
</center>

Скважина находится в центре, трещины ортогональны оси скважины. 
Трещины бесконечной проницаемости. 

$$
        \begin{array}l
            q_f = \dfrac{2 k_{H} \left(2 x_f h\right)\triangle p}{\mu B x} \\
            x = \dfrac{L}{2\left(n-1\right)} \\
            \triangle p = ???
        \end{array}
        % \qquad(1)
$$

#### <a href ="../analytic_formulas/hujun_li_1996">Hujun, Li (1996)</a>

<center>{{< figure src="/mshfhw/analytic_formulas/image_hujin_li_1996_1.png"  caption="Рис.2 " width="300">}}</center>

$$
  \begin{array}l
    Q_i = \dfrac{2\pi k h \left(p_r - p_w\right)}{\mu} \cdot \dfrac{1}{A} \\ \\
    A = \dfrac{\pi \left(L^* - x_f\right)}{\left({L_f}_1 + {L_f}_2\right)} + 
        \dfrac{\pi}{x_f \left(\dfrac{1}{{L_f}_1} + \dfrac{1}{{L_f}_2} \right)} + 
        \dfrac{\pi x_f k}{k_f w} +
        \dfrac{k h}{k_f w} \left( \ln \dfrac{h}{2r_w} - \dfrac{\pi}{2}\right)
  \end{array}
$$

### Внешний контур : окружность

#### <a href ="../analytic_formulas/guo_2009">Guo (2009)</a>

<center> {{< figure src="/mshfhw/analytic_formulas/image_guo_2009_1.png" caption="Рис.3 " width="300">}} </center>

Область: окружность радиуса \(r_{L}\).         

\(\bar{z_e}\) -- половина среднего расстояния между трещинами

$$
  \begin{array}l
      q = \dfrac{1}{ \dfrac{1}{J_R} + \dfrac{1}{J_L} + \dfrac{1}{J_r} } \left(\bar{p} - p_w\right) \\
      J_R = \dfrac{2 \pi k_H h}{\mu B \left(\dfrac{1}{2} \ln\left(\dfrac{4A}{\gamma C_A r_L^2}\right) \right)} \\
      J_L = \sum_{i=1}^n \dfrac{4 k_H h}{\mu B z_{e_i} \sqrt{c_i}} \left(1 - e^{-\sqrt{c_i} x_{f_i}}\right)\\
      J_r = \sum_{i=1}^n \dfrac{\pi k_{fwi} w_{wi}}{6 \mu B \left[\ln\left(\dfrac{h}{2r_{wi}}\right) + \pi - \left( 1.224 - s_i - Dq\right)\right]} \\
      c_i = \dfrac{24 k_h}{z_{e_i}w_i k_{f_i}} \\
      r_L = \sqrt{\dfrac{4 n \bar{z_e} \bar{x_f}}{\pi}}
  \end{array}
  % \qquad(1)
$$



