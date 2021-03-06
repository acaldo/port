import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CertCard from './CertCard';
import Particle from '../Particle';

import apiNode from '../../Assets/Cert/apiNodeJS.png';
import arrayJs from '../../Assets/Cert/arrayJs.png';
import asincronismoJs from '../../Assets/Cert/asincronismoJs.png';
import basicoJS from '../../Assets/Cert/basicoJS.png';
import cloudAWS from '../../Assets/Cert/cloudAWS.png';
import cloudComputingAWS from '../../Assets/Cert/cloudComputingAWS.png';
import db from '../../Assets/Cert/db.png';
import ecmaJS from '../../Assets/Cert/ecmaJS.png';
import fundamentoJS from '../../Assets/Cert/fundamentoJS.png';
import go from '../../Assets/Cert/go.png';
import npm from '../../Assets/Cert/npm.png';
import PooGO from '../../Assets/Cert/PooGO.png';
import prework from '../../Assets/Cert/prework.png';
import reactHook from '../../Assets/Cert/reactHook.png';
import reactRouterRedux from '../../Assets/Cert/reactRouterRedux.png';
import scopeJS from '../../Assets/Cert/scopeJS.png';
import storageAWS from '../../Assets/Cert/storageAWS.png';
import v8JS from '../../Assets/Cert/v8JS.png';
import apiPost from '../../Assets/Cert/apiPost.png';
import apiAuth from '../../Assets/Cert/apiAuth.png';
import introBack from '../../Assets/Cert/introBack.png';
import mongoWebSocket from '../../Assets/Cert/mongoWebSocket.png';
import backNest from '../../Assets/Cert/backNest.png';
import nestModular from '../../Assets/Cert/nestModular.png';
import goRest from '../../Assets/Cert/goRest.png';
import grpc from '../../Assets/Cert/grpc.png';
import cqrs from '../../Assets/Cert/cqrs.png';

function Certs() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Mis <strong className='purple'>Certificados </strong>
        </h1>
        <p style={{ color: 'white' }}>Aca se encuentran mis certificaciones</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={prework}
              title='PreWork'
              description='Configuraci??n WSL2'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={v8JS}
              title='V8 JS'
              description='Historia y l??gica del motor v8'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={basicoJS}
              title='B??sico JS'
              description='Conceptos b??sicos de JS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={ecmaJS}
              title='EcmaScript 6+'
              description='Historia de ecma y cambios en el tiempo'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={asincronismoJs}
              title='Asincronismo JavaScript'
              description='Manejo de asincronismo con Callback,Promise y Async-Await'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={fundamentoJS}
              title='Fundamentos de NodeJS'
              description='Fundamentos de Node'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={scopeJS}
              title='Scope JavaScript'
              description='Scope/Hoisting/Clousure'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={arrayJs}
              title='Array en JavaScript'
              description='Manejo de array en Javascript'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={npm}
              title='NPM'
              description='Manejo y conceptos de NPM'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={db}
              title='Fundamentos base de datos'
              description='Fundamentos de las base de datos relacionadas y no relacionadas (MySQL/Firebase)'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudAWS}
              title='Cloud Aws'
              description='Conceptos de programaci??n en la nube'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudComputingAWS}
              title='Computing Aws'
              description='Diferentes formas para hostear una aplicaci??n en AWS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={storageAWS}
              title='Storage AWS'
              description='Persistencia de datos con buckets'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={introBack}
              title='Introducci??n Backend'
              description='Conceptos generales del backend'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={go}
              title='Golang'
              description='Primer vistaso a Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={PooGO}
              title='Poo Golang'
              description='Programaci??n orientada a objetos con Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactRouterRedux}
              title='React Router/Redux'
              description='Routeo con React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactHook}
              title='React Hook'
              description='Manejo de los Hook en React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiNode}
              title='Api en express'
              description='Creaci??n de API con express'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiPost}
              title='Express con Postgress'
              description='ORM con Sequelize guardando los datos en Postgres'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiAuth}
              title='Autentificaci??n con PassportJS y JWT'
              description='Capa de seguridad en la api para la gestion de usuarios'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={mongoWebSocket}
              title='Mongo y Web Socket'
              description='Api de mensajes en tiempo real gracias a WebSocket y envio de archivo con multer'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={backNest}
              title='Backend con Nest'
              description='Manejo de Api para comercio, Controladores,servicios,DTO y validacion de par??metros con class-validator'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={nestModular}
              title='Programaci??n modular en Nest'
              description='Continuacion de la API, Inyeccion de dependencia, documentaci??n con Swagger y Deploy en Heroku'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={goRest}
              title='Apirest y Websocket con GO'
              description='API REST con GO utilizando las operaciones CRUD. Crea un endpoint para traer informaci??n de usuarios autenticados e integracion con websocket'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={grpc}
              title='Protobuffers y gRPC'
              description='Microservicios de alto rendimiento'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cqrs}
              title='Arquitectura de Eventos y CQRS'
              description='Microservicios utilizando Arquitectura de Eventos con CQRS indexados Elasticsearch'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Certs;
