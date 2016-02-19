import _ from './utils';

var SVG_NS = "http://www.w3.org/2000/svg";

export default class SvgFactory {

    static theInstance: SvgFactory;

    static getInstance() {
        if (!this.theInstance) {
            this.theInstance = new SvgFactory();
        }
        return this.theInstance;
    }

    public createFilterSvg() {
        var eSvg = createIconSvg();

        var eFunnel = document.createElementNS(SVG_NS, "polygon");
        eFunnel.setAttribute("points", "0,0 4,4 4,10 6,10 6,4 10,0");
        eFunnel.setAttribute("class", "ag-header-icon");
        eSvg.appendChild(eFunnel);

        return eSvg;
    }

    public createMenuSvg(): Element {
        var eSvg = document.createElementNS(SVG_NS, "svg");
        var size = "12";
        eSvg.setAttribute("width", size);
        eSvg.setAttribute("height", size);

        ["0", "5", "10"].forEach(function (y) {
            var eLine = document.createElementNS(SVG_NS, "rect");
            eLine.setAttribute("y", y);
            eLine.setAttribute("width", size);
            eLine.setAttribute("height", "2");
            eLine.setAttribute("class", "ag-header-icon");
            eSvg.appendChild(eLine);
        });

        return eSvg;
    }

    public createArrowUpSvg() {
        return createPolygonSvg("0,10 5,0 10,10");
    }

    public createArrowLeftSvg() {
        return createPolygonSvg("10,0 0,5 10,10");
    }

    public createArrowDownSvg() {
        return createPolygonSvg("0,0 5,10 10,0");
    }

    public createArrowRightSvg() {
        return createPolygonSvg("0,0 10,5 0,10");
    }

    public createSmallArrowRightSvg() {
        return createPolygonSvg("0,0 6,3 0,6", 6);
    }

    public createSmallArrowDownSvg() {
        return createPolygonSvg("0,0 3,6 6,0", 6);
    }

    //public createOpenSvg() {
    //    return createPlusMinus(true);
    //}
    //
    //public createCloseSvg() {
    //    return createPlusMinus(false);
    //}

    // UnSort Icon SVG
    public createArrowUpDownSvg() {
        var svg = createIconSvg();

        var eAscIcon = document.createElementNS(SVG_NS, "polygon");
        eAscIcon.setAttribute("points", '0,4 5,0 10,4');
        svg.appendChild(eAscIcon);

        var eDescIcon = document.createElementNS(SVG_NS, "polygon");
        eDescIcon.setAttribute("points", '0,6 5,10 10,6');
        svg.appendChild(eDescIcon);

        return svg;
    }

    //public createFolderOpen(size: number): HTMLElement {
    //    var svg = `<svg width="${size}" height="${size}" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1717 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zm-1141-163h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zm1269 163q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z"/></svg>`;
    //    return _.loadTemplate(svg);
    //}
    //
    //public createFolderClosed(size: number): HTMLElement {
    //    var svg = `<svg width="${size}" height="${size}" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1312v-704q0-40-28-68t-68-28h-704q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v960q0 40 28 68t68 28h1216q40 0 68-28t28-68zm128-704v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/></svg>`;
    //    return _.loadTemplate(svg);
    //}

    public createFolderOpen() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNqkU0tLQkEUPjN3ShAzF66CaNGiaNEviFpLgbSpXf2ACIqgFkELaVFhtAratQ8qokU/oFVbMQtJvWpWGvYwtet9TWfu1QorvOGBb84M5/WdOTOEcw7tCKHBlT8sMIhr4BfLGXC4BrALM8QUoveHG9oPQ/NhwVCQbOjp0C5F6zDiwE7Aed/p5tKWruufTlY8bkqliqVN8wvH6wvhydWd5UYdkYCqqgaKotQTCEewnJuDBSqVmshOrWhKgCJVqeHcKtiGKdqTgGIOQmwGum7AxVUKinXKzX1/1y5Xp6g8gpe8iBxuGZhcKjyXQZIkmBkfczS62YnRQCKX75/b3t8QDNhD8QX83V5Ipe7Bybug2Pt5NJ7A4nEqGOQKT+Bzu0HTDNB1syUYYxCJy0kwzIRogb0rKjAiQVXXHLVQrqqvsZtsFu8hbyXwe73WeMQtO5GonJGxuiyeC+Oa4fF5PEirw9nbx9FdxtN5eMwkzcgRnoeCa9DVM/CvH/R2l+axkz3clQguOFjw1f+FUzEQCqJG2v3OHwIMAOW1JPnAAAJxAAAAAElFTkSuQmCC';
        return eImg;
    }

    public createFolderClosed() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARlJREFUeNqsUz1PwzAUPDtOUASpYKkQVWcQA/+DhbLA32CoKAMSTAwgFsQfQWLoX4GRDFXGIiqiyk4e7wUWmg8phJPOtvzunc6WrYgIXaD06KKhij0eD2uqUxBeDC9OmcNKCYd7ujm7ryodXz5ong6UPpqcP9+O76y1vwS+7yOOY1jr0OttlQyiaB0n148TAyK9XFqkaboiSTEYDNnkDUkyKxkkiSQkzQbwsiyHcBXz+Tv6/W1m+QiSEDT1igTO5RBWYbH4rNwPw/AnQU5ek0EdCj33SgLjHEHYzoAkgfmHBDmZuktsQqHPvxN0MyCbbWjtIQjWWhlIj/QqtT+6QrSz+6ef9DF7VTwFzE2madnu5K2prt/5S4ABADcIlSf6Ag8YAAAAAElFTkSuQmCC';
        return eImg;
    }

    public createColumnIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTcwQ0JFMzlENjZEMTFFNUFEQ0U5RDRCNjFFRENGMUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTcwQ0JFM0FENjZEMTFFNUFEQ0U5RDRCNjFFRENGMUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzBDQkUzN0Q2NkQxMUU1QURDRTlENEI2MUVEQ0YxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzBDQkUzOEQ2NkQxMUU1QURDRTlENEI2MUVEQ0YxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDOrJYAAABxSURBVHjalJBBDsAgCAQXxXvj2/o/X9Cvmd4lUpV4MXroJMTAuihQSklVMSCysxSBW4uWKzjG6zZLDxrlWis5EVEThoWmi3N+nxAYs2WnXQY34L3HisMWPQlHB+2FPtNW6D/8+ziBRcroOXc0B/wEGABY6TPS1FU0bwAAAABJRU5ErkJggg==';
        return eImg;
    }

    public createColumnsIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENFQkI4NDhENzJDMTFFNUJDNEVFRjgwRDI3MkU1Q0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENFQkI4NDlENzJDMTFFNUJDNEVFRjgwRDI3MkU1Q0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0VCQjg0NkQ3MkMxMUU1QkM0RUVGODBEMjcyRTVDQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0VCQjg0N0Q3MkMxMUU1QkM0RUVGODBEMjcyRTVDQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj6ozGQAAAAuSURBVHjaYmRgYPjPgBswQml8anBK/idGDQsxNpCghnTAOBoGo2EwGgZgABBgAHbrH/l4grETAAAAAElFTkSuQmCC';
        return eImg;
    }

    public createPinIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAedJREFUeNqkUktLG1EYPTN31CIN0oWbIAWhKJR0FXcG6gOqkKGKVvEXCKULC91YSBcK7jXgQoIbFxn3ErFgFlIfCxUsQsCoIJYEm9LWNsGmJjPTM+Oo44Aa6IUzd+bec77H+UYyTRP/s5SsLFfCCxEjOhD9CXw64ccXJj7nLleYaMSvaa/+Au9Y73P3RUUBDIuXyaAxGu35A7xnkM57A7icCZXIO8/nkVleRn1/f9cv0xzjfVclFdi9N8ZivfnDQxQKBTwoFvFicLCVQSesJIpHMEY8dSqQWa54Eov1fF9ZQVHXsZNMblhnNE/wPmJPIX1zjOG2+fkgslnozHR2eopLcSIe3yoD48y45FbIxoVJNjimyMehoW3T58PvdBq53V18zeWwFo+vUfyBlCVvj0Li4/M1DnaAUtXCQkNDR4f/294eaoTAwdHRCROMWlzJZfC+1cKcJF07b5o+btWvV1eDyVBouyUcDj5UFDg924tVYtERpz0mCkmSulOp1GQgEIj0yvKPYiKBlwMDQXfPU47walEEmb8z0a5p2qaiKMPEoz6ezQLdM8DWNDDzltym24YthHimquoshSoDicvzZkK9S+h48pjCN4ZhrBPHTptlD0qevezwdCtAHVHrMti4A7rr3eb+E2AAoGnGkgkzpg8AAAAASUVORK5CYII=';
        return eImg;
    }

    public createPlusIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAatJREFUeNqkU71KA0EQ/vaiib+lWCiordidpSg+QHwDBSt7n8DGhwhYCPoEgqCCINomARuLVIqgYKFG5f6z68xOzrvzYuXA3P7MzLffN7unjDH4jw3xx91bQXuxU4woNDjUX7VgsFOIH3/BnHgC0J65AzwFjDpZgoG7vb7lMsPDq6MiuK+B+kjGwFpCUjwK1DIQ3/dl0ssVh5TTM0UJP8aBgBKGleSGIWyP0oKYRm3KPSgYJ0Q0EpEgCASA2WmWZQY3kazBmjP9UhBFEbTWAgA0f9W2yHeG+vrd+tqGy5r5xNTT9erSqpvfdxwHN7fXOQZ0QhzH1oWArLsfXXieJ/KTGEZLcbVaTVn9ALTOLk9L+mYX5lxd0Xh6eGyVgspK6APwI8n3x9hmNpORJOuBo5ah8GcTc7dAHmkhNpYQlpHr47Hq2NspA1yEwHkoO/MVYLMmWJNarjEUQBzQw7rPvardFC8tZuOEwwB4p9PHqXgCdm738sUDJPB8mnwKj7qCTtJ527+XyAs6tOf2Bb6SP0OeGxRTVMp2h9nweWMoKS20l3+QT/vwqfZbgAEAUCrnlLQ+w4QAAAAASUVORK5CYII=';
        return eImg;
    }

    public createMinusIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKVJREFUeNpi/P//PwMlgImBQjBqAAMDy3JGRgZGBoaZQGxMikZg3J0F4nSWHxC+cUBamvHXr18Zfv36Bca/f/8G43///oExKLphmImJieHagQMQF7QDiSwg/vnzJ8P3799RDPj79y+KRhhmBLr6I1DPNJABtxkYZM4xMFx7uXAhSX5/CtQD0gv0OgMfyCAgZgViZiL1/wXi30D8h3E0KVNuAECAAQDr51qtGxzf1wAAAABJRU5ErkJggg==';
        return eImg;
    }

    public createMoveIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoZJREFUeNpsU81rE0EUf7uzu2lNVJL6Eb0IBWusepqcKm3wEFkvxqDgQbwUtYeeg5cccwj4F7QKChEPipRcdMGDiaAoJAexLYViwYsfbU1JYkx3Zz98b8220Wbg7ez7vXm/mffmN9Kh1G2QGQOmMDiRyYEkSaCoKjDGdAAooOUdxzFsIcDzPPhSvgeO7YDrOLBRmQdlJHULVE0DNRSCvqFjUuHqhWP8+etvhR5m0CeengVhmiAsywdl2Dt03K1wZSrO220XaCaf8AFrQel32s0mrDcaWfovrq3Vc9OTvHj/Tb0Xzh6JxQwNyxtIgPXpqqJk94fDM+1Oh6CaEF4QTiIOGJ/DdQtBObsEmGxbll/rkCyDPDwMzW4XhHD88EH0NcRxDUeX4/qdnsi0s8Aas+kEp8Zg82pMkmpDigKbjSbQTD7hFL94/jin9ZRHBNLo3Wrt+uUkbzQsiEZVMPGKfv76DaawodnahkhY86+PNnXxs77ZgVOjMahWVuufi1NJRZhWvvT0beHGtQn++Nm7en+DzqXO8vfVxX+wsYnT/JWxWEe95P0eILsvkkdPKn4PUEBJmunILab5992PLVU++skoNmOniT7JX2Fkt5GM1EjqbMohXzQmqo7KwCQ6zYKiabu30PpQAnZ0HKSRMcMRwnBddw4ZOO4GLRYKFFdDhrrteTMMdWB9/QTdH8sIp0EKmNT4GWDjGZAPJ3TcrbBv+ibfwtwDqBvzYck/truxYjjLZRDflwLt7JUmEoAymdPV7INa5IXn0Uw+4f8PIqATMLQIWpQ0E/RFTmQ4nLx0B1Zfzrsr5eAmbLQW2hYpHwkcqfegNBJhzwY9sGC4aCZaF81CAvePAAMAcwtApJX/Wo0AAAAASUVORK5CYII=';
        return eImg;
    }

    public createLeftIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe9JREFUeNqkUz1oE2EYfu7uuyRKLCFt6g+4VNQWWod+mQRRR1En0UFOHKoNCMKNju4SEQsOzsFNcRGl4CS42AzaKhKcsqhk0Etj7u+773y/6+USbOLSF5574b33eX+e906L4xh7MaYeC/c/IFcowMznEzDTBGPMoldnqEFtkPy708mIqvHHe0s7BcaYJYSwRwPu9vbYRH1XJI4tEYb2jYtHOHko9LvdxE9cYZQcBoF9+9oJ7jgRQt+HFAJSyv9rkO6UkGvXF3mr9QelkpkUINsYR6T8Jrkay8i+b9+5yfnmppMmSFw6e4yrIynBBsdS3jQ1PH/zeTiBIt+9dZpvbTlZh1+Oh/Z3F33XRUj7R1GUxA3DwMx0EYHnDUUMPe9Rfe1tc26uiL6M8aXno+UH6O7PIShPIapMQx6sQMxW4JbL+MkKCKhwNgGN2FD7Pnz82j63coF/aoc4ekDHtxfrzUniaZrW/FfEBomI9Scv7fnVq7zdBwIqajBWpeTd99d3vgBNCaQSzMOLyJ+6ApSPWxSzD61a/MfThupSjVuvxk2A3sazYYGBGbML0OcvW9rMyeRLFO8eVGXnKyacMiug5ikSplLs05dXzqNQWpbv6/URjpK+m6JH3GhQQI2QI+RTmBO0EwQ/RUBcqe31d/4rwAB0lPTXqN6HzgAAAABJRU5ErkJggg==';
        return eImg;
    }

    public createRightIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfBJREFUeNqkUz1s00AU/hwSh1SEhiFCYuhCVSExgHRiYKjEVCEyMMGAsjCxZunesWM7dIgEA8JISPyoUhFDFoZOSE2GgtrSIAYWSEPb1HUS23c+8+7iuE5/JKQ+6fOdz/e+970fG2EY4jyWVo9b819hGEZ8WCgW4z2dV2lZFUJYgnNwz9PwXRebc3cGBMfN6XSQy+eHryyCMuv43dRpBCpSz7b1qlB+cI3RWkEYlv+LQFkgBLxuV8s9OAhQLk0w7vsnSHQKVMhqQuYRSRBouK5AqyXwpHSdvfywUYkKb8UEFIU9fXybOY6A+jbszGAP7O/7RBKg2eR4dH+KvV5ej0k0gaqobXO0214c3acUDnt99Pp9cKqDUqLsx68LuHd3gtU+b1eOCOiSaaZQKJjgMsSOy7EnJcSYCZnLwKbojic1weTVMXz81KhTexeSKdSXqrUzh2X84Qxr9SQmx1P48q6mnTPZrJUs4jMp5QlHlSd1Y203fRGFK8DPV28HzqZpjXShW3+D00bamCrpNU9DuvvcGsjea1rO+nvw39+AxRCGckyO8ciQFG8gPT27ptX8/b4gt1asYGdzRGE6MVCXCJcj5NShbG9B/NnYhttpyMYL5XmTYEdw1KgMFSgJJiEbIXNGPQXBi+CTrzTO+zv/E2AA3Y8Nbp4Kn1sAAAAASUVORK5CYII=';
        return eImg;
    }

    public createColumnVisibleIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdhJREFUeNrUk01LAlEUhu845QdRUxZBhIIWtFBso2AwRAVNLqKltHCb63b9A/9AixZCELhyYdAmEyYCBcOlNa1CSQoxog/DMY3x9p5B27Zw1YGH8XrO+55759wROOdsmLCwIWNoAwFh/ugfZQKsAQV4gbNf9woqIAeuQHOgGxgIMNix2Wx7iqIsxmKxWU3TxgqFgpWSsix3fT5fK5VKPedyuftOp5OE7oz60hHsYD8UCh3k83k5k8ksGYYx5XK5rK2WzgiIrPQf5aiGakljakVRjKDrZaPR6Oi6zglVVTlFMnnMZXmdK8o2x674IE+1pCHtCFx2w+GwE9u3drtd81yJRAKdDXZ4eGSuFxb87PHxjg3yVEsaNNolg5NSqTTVbDaX7Agq8Hg8TFWLbGVl0xTY7TY2Our5NfhCQPNAWtFisdSr1WqvWCwawWBwRpKkcZyXadoN83qXmSQ50V1jGxurpnGlUqnH4/FzvItTmoo5ApjQNMIOh2MrEon4o9Gov1arzZXL5XHKBwKBT7fbXU+n07fZbPa23W5f4BVd93o9TgYimATTMHHCbB5PN9ZSf0LmrsEHRDWInvB8w/oFvAv920iFDkBzF/64fHTjvoFOxsL//5h+BBgAwjbgRLl5ImwAAAAASUVORK5CYII=';
        return eImg;
    }

    public createColumnHiddenIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZGNDRBMkJENkU3MTFFNUIwOTBGRTc0MTA3OTI2OEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZGNDRBMkNENkU3MTFFNUIwOTBGRTc0MTA3OTI2OEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkY0NEEyOUQ2RTcxMUU1QjA5MEZFNzQxMDc5MjY4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkY0NEEyQUQ2RTcxMUU1QjA5MEZFNzQxMDc5MjY4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjQ0mkwAAACISURBVHjaYvz//z8DJYCJgUIwDAxgKSwspMwAIOYDYlcgtgNiJSBWBGJhIGaHyoHAJyD+CcRvgfg+EN8D4kNAvBtkwGEg1iNgkSCUlgBibSg7D4gvgwywRXKBChArALEIELMCsQBU8Qcg/g3Eb4D4ARDfBeKDMBeAnLcWikkGjKMpcRAYABBgACqXGpPEq63VAAAAAElFTkSuQmCC';
        return eImg;
    }

    public createGroupIcon() {
        var eImg = document.createElement('img');
        eImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVCNUI1OUNENkYwMTFFNThGNjJDNUE3ODIwMEZERDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVCNUI1OURENkYwMTFFNThGNjJDNUE3ODIwMEZERDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUI1QjU5QUQ2RjAxMUU1OEY2MkM1QTc4MjAwRkRENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUI1QjU5QkQ2RjAxMUU1OEY2MkM1QTc4MjAwRkRENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlkCTGoAAACDSURBVHjaYmRgYPjPgBswQun/+BT8X3x5DoZErG4KCj/3/DcMNZMNuRiYGPADRiRX4HYBJV5AB0QrhAGW//8hehgZES6FiaGLYzUAq7sxNf0nxQCsinHFAguegCPKBYxoYfAfWQxNnPgwINJVYMDEQCEYfLHASGoKRQlxPN7BqQggwAAN+SopPnDCwgAAAABJRU5ErkJggg==';
        return eImg;
    }

}

// i couldn't figure out how to not make these blurry

/*function createPlusMinus(plus: boolean) {
    var eSvg = document.createElementNS(SVG_NS, "svg");
    var size = "14";
    eSvg.setAttribute("width", size);
    eSvg.setAttribute("height", size);

    var eRect = document.createElementNS(SVG_NS, "rect");
    eRect.setAttribute('x', '1');
    eRect.setAttribute('y', '1');
    eRect.setAttribute('width', '12');
    eRect.setAttribute('height', '12');
    eRect.setAttribute('rx', '2');
    eRect.setAttribute('ry', '2');
    eRect.setAttribute('fill', 'none');
    eRect.setAttribute('stroke', 'black');
    eRect.setAttribute('stroke-width', '1');
    eRect.setAttribute('stroke-linecap', 'butt');
    eSvg.appendChild(eRect);

    var eLineAcross = document.createElementNS(SVG_NS, "line");
    eLineAcross.setAttribute('x1','2');
    eLineAcross.setAttribute('x2','12');
    eLineAcross.setAttribute('y1','7');
    eLineAcross.setAttribute('y2','7');
    eLineAcross.setAttribute('stroke','black');
    eLineAcross.setAttribute('stroke-width', '1');
    eLineAcross.setAttribute('stroke-linecap', 'butt');
    eSvg.appendChild(eLineAcross);

    if (plus) {
        var eLineDown = document.createElementNS(SVG_NS, "line");
        eLineDown.setAttribute('x1','7');
        eLineDown.setAttribute('x2','7');
        eLineDown.setAttribute('y1','2');
        eLineDown.setAttribute('y2','12');
        eLineDown.setAttribute('stroke','black');
        eLineDown.setAttribute('stroke-width', '1');
        eLineDown.setAttribute('stroke-linecap', 'butt');
        eSvg.appendChild(eLineDown);
    }

    return eSvg;
}*/

function createPolygonSvg(points: any, width?: any) {
    var eSvg = createIconSvg(width);

    var eDescIcon = document.createElementNS(SVG_NS, "polygon");
    eDescIcon.setAttribute("points", points);
    eSvg.appendChild(eDescIcon);

    return eSvg;
}

// util function for the above
function createIconSvg(width?: any) {
    var eSvg = document.createElementNS(SVG_NS, "svg");
    if (width > 0) {
        eSvg.setAttribute("width", width);
        eSvg.setAttribute("height", width);
    } else {
        eSvg.setAttribute("width", "10");
        eSvg.setAttribute("height", "10");
    }
    return eSvg;
}

function createCircle(fill: any) {
    var eSvg = createIconSvg();

    var eCircle = document.createElementNS(SVG_NS, "circle");
    eCircle.setAttribute("cx", "5");
    eCircle.setAttribute("cy", "5");
    eCircle.setAttribute("r", "5");
    eCircle.setAttribute("stroke", "black");
    eCircle.setAttribute("stroke-width", "2");
    if (fill) {
        eCircle.setAttribute("fill", "black");
    } else {
        eCircle.setAttribute("fill", "none");
    }
    eSvg.appendChild(eCircle);

    return eSvg;
}