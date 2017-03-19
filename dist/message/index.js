"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_icon=require("../icon"),_icon2=_interopRequireDefault(_icon);require("./style.less");var GlobalMessage=function(e){var t=e.type,a=e.content,s=(0,_classnames2.default)("message-content",t);return _react2.default.createElement("div",{className:s},_react2.default.createElement(_icon2.default,{type:t}),_react2.default.createElement("p",null,a))};GlobalMessage.propTypes={type:_react.PropTypes.string.isRequired,content:_react.PropTypes.string.isRequired};var Message=function(){function e(){(0,_classCallCheck3.default)(this,e)}return(0,_createClass3.default)(e,null,[{key:"success",value:function(e,t){this.message("success",e,t)}},{key:"warn",value:function(e,t){this.message("warn",e,t)}},{key:"error",value:function(e,t){this.message("error",e,t)}},{key:"message",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,s=document.createElement("div");s.setAttribute("class","component-message-wrap"),s.setAttribute("style","animation-duration:"+a+"ms"),document.body.appendChild(s),(0,_reactDom.render)(_react2.default.createElement(GlobalMessage,{type:e,content:t}),s),setTimeout(function(){(0,_reactDom.unmountComponentAtNode)(s),s.remove()},a)}}]),e}();exports.default=Message;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiX3JlYWN0IiwicmVxdWlyZSIsIl9yZWFjdERvbSIsIl9jbGFzc25hbWVzIiwiX2ljb24iLCJHbG9iYWxNZXNzYWdlIiwicHJvcHMiLCJ0eXBlIiwiY29udGVudCIsImNscyIsIl9jbGFzc25hbWVzMiIsImRlZmF1bHQiLCJfcmVhY3QyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIl9pY29uMiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJNZXNzYWdlIiwidGltZW91dCIsInRoaXMiLCJtZXNzYWdlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiMFhBQUFBLE9BQUFDLFFBQUEsZ0RBQ0FDLFVBQUFELFFBQUEsYUFDQUUsWUFBQUYsUUFBQSwrREFFQUcsTUFBQUgsUUFBQSwrQ0FFQUEsU0FBQSxlQUVBLElBQU1JLGVBQWdCLFNBQUNDLEdBQVUsR0FDdkJDLEdBQWtCRCxFQUFsQkMsS0FBTUMsRUFBWUYsRUFBWkUsUUFDUkMsR0FBTSxFQUFBQyxhQUFBQyxTQUNWLGtCQUNBSixFQVpKLE9BZUlLLFNBQUFELFFBQUFFLGNBQUEsT0FBS0MsVUFBV0wsR0FDZEcsUUFBQUQsUUFBQUUsY0FBQUUsT0FBQUosU0FBTUosS0FBTUEsSUFDWkssUUFBQUQsUUFBQUUsY0FBQSxJQUFBLEtBQUlMLElBS1ZILGVBQWNXLFdBQ1pULEtBQU1QLE9BQUFpQixVQUFVQyxPQUFPQyxXQW5CekJYLFFBQUFSLE9BQUFpQixVQUFBQyxPQUFBQyxlQXVCcUJDLDRJQXJCckJaLEVBQUFhLEdBdUJJQyxLQUFLQyxRQUFRLFVBQVdmLEVBQVNhLGdDQUV2QmIsRUFBU2EsR0F2QmpCaEIsS0FBQUEsUUFBQUEsT0FBZ0JHLEVBQWhCSCxpQ0FBMkJHLEVBQ2pCQSxHQTBCWmMsS0FBS0MsUUFBUSxRQUFTZixFQUFTYSxtQ0FwQi9CZCxFQUFBQyxHQUFBLEdBQUFhLEdBQUFHLFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUEsSUFBQUcsRUFBQUMsU0FBQWYsY0FBQSxNQUFBYyxHQUFLRSxhQUFMLFFBQUEsMEJBQ0VGLEVBQUFFLGFBQUEsUUFBQSxzQkFBWXRCLEVBQVosTUFDQXFCLFNBQUFFLEtBQUFDLFlBQUFKLElBQUEsRUFBQXpCLFVBQUE4QixRQUFBcEIsUUFBQUQsUUFBQUUsY0FBQVIsZUFBQUUsS0FBQUEsRUFBQUMsUUFBQUEsSUFBQW1CLEdBQUFNLFdBQUEsWUFBSXpCLEVBQUFBLFVBQUFBLHdCQUFBQSxHQUFKbUIsRUFBQU8sVUFISmIsNEJBYW1CRCIsImZpbGUiOiJtZXNzYWdlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciwgdW5tb3VudENvbXBvbmVudEF0Tm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBJY29uIGZyb20gJ34vaWNvbic7XG5cbmltcG9ydCAnLi9zdHlsZS5sZXNzJztcblxuY29uc3QgR2xvYmFsTWVzc2FnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IHByb3BzO1xuICBjb25zdCBjbHMgPSBjeChcbiAgICAnbWVzc2FnZS1jb250ZW50JyxcbiAgICB0eXBlXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc30+XG4gICAgICA8SWNvbiB0eXBlPXt0eXBlfSAvPlxuICAgICAgPHA+e2NvbnRlbnR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR2xvYmFsTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIHtcbiAgc3RhdGljIHN1Y2Nlc3MoY29udGVudCwgdGltZW91dCkge1xuICAgIHRoaXMubWVzc2FnZSgnc3VjY2VzcycsIGNvbnRlbnQsIHRpbWVvdXQpO1xuICB9XG4gIHN0YXRpYyB3YXJuKGNvbnRlbnQsIHRpbWVvdXQpIHtcbiAgICB0aGlzLm1lc3NhZ2UoJ3dhcm4nLCBjb250ZW50LCB0aW1lb3V0KTtcbiAgfVxuICBzdGF0aWMgZXJyb3IoY29udGVudCwgdGltZW91dCkge1xuICAgIHRoaXMubWVzc2FnZSgnZXJyb3InLCBjb250ZW50LCB0aW1lb3V0KTtcbiAgfVxuICBzdGF0aWMgbWVzc2FnZSh0eXBlLCBjb250ZW50LCB0aW1lb3V0ID0gMzAwMCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBvbmVudC1tZXNzYWdlLXdyYXAnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBhbmltYXRpb24tZHVyYXRpb246JHt0aW1lb3V0fW1zYCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHJlbmRlcig8R2xvYmFsTWVzc2FnZSB0eXBlPXt0eXBlfSBjb250ZW50PXtjb250ZW50fSAvPiwgY29udGFpbmVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxufVxuIl19
